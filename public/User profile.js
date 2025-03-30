// ดึงปุ่มจาก DOM โดยใช้ id
const backButton = document.getElementById("backButton");

// ใส่ event เมื่อมีการคลิกที่ปุ่ม
backButton.addEventListener("click", function() {
    window.location.href = "Home page.html"; // เปลี่ยนเป็น URL หรือไฟล์ที่ต้องการ
});
