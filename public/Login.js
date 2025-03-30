console.log("✅ Login.js loaded");

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const result = document.getElementById('result');

  if (!form) {
    console.error('🚫 loginForm not found!');
    return;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      result.textContent = 'กรุณากรอกอีเมลและรหัสผ่าน';
      result.style.color = 'red';
      return;
    }

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.success && data.redirect) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = data.redirect;
      } else {
        result.style.color = 'red';
        result.textContent = data.message || 'เข้าสู่ระบบไม่สำเร็จ';
      }
    } catch (error) {
      result.style.color = 'red';
      result.textContent = 'เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์';
    }
    
  });
});
