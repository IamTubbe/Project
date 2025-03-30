function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    if (email === "test@example.com" && password === "123456") {
        alert("เข้าสู่ระบบสำเร็จ!");
        if (remember) {
            localStorage.setItem("rememberedEmail", email);
        }
        window.location.href = "dashboard.html"; // เปลี่ยนเส้นทางเมื่อเข้าสู่ระบบสำเร็จ
    } else {
        alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
});

// โหลดอีเมลที่เคยจำไว้
document.addEventListener("DOMContentLoaded", function() {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("remember").checked = true;
    }
});
// ดึงรูปภาพจาก DOM โดยใช้ id
const userIcon = document.getElementById("userIcon");

// ใส่ event เมื่อมีการคลิกที่รูปภาพ
userIcon.addEventListener("click", function() {
    consle("คุณคลิกที่ไอคอนแล้ว!");
});

document.addEventListener("DOMContentLoaded", function () {
    // ป้องกันการคลิกที่โลโก้
    const logo = document.querySelector(".logo"); // เปลี่ยน ".logo" เป็นคลาสหรือไอดีของโลโก้จริง
    if (logo) {
        logo.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("คลิกที่โลโก้ถูกบล็อก");
        });
    }

    // ให้ปุ่มทั้งหมดกดได้ ยกเว้นโลโก้
    const buttons = document.querySelectorAll("button, a");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            consle("คุณคลิกปุ่ม: " + this.textContent);
        });
    });
});

function login() {
    localStorage.setItem("isLoggedIn", "true"); // บันทึกสถานะล็อกอิน
    window.location.href = "index.html"; // เปลี่ยนหน้าไปยังหน้าหลัก
}
