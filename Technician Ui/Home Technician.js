document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    // ถ้ายังไม่ได้ล็อกอินให้ไปที่หน้า login.html
    if (!isLoggedIn) {
        window.location.href = "login.html";
    }

    // ป้องกันการคลิกที่โลโก้
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("คลิกที่โลโก้ถูกบล็อก");
        });
    }

    // ป้องกันการเข้าถึงปุ่มโดยไม่ล็อกอิน
    function checkLogin(event) {
        if (!localStorage.getItem("isLoggedIn")) {
            event.preventDefault(); // ป้องกันการเปลี่ยนหน้า
            window.location.href = "login.html";
        }
    }

    // ดึงปุ่มทั้งหมดที่ต้องการตรวจสอบการล็อกอิน
    let buttons = document.querySelectorAll("a, button");
    buttons.forEach(button => {
        button.addEventListener("click", checkLogin);
    });

    // ดึงรูปภาพโปรไฟล์จาก DOM
    const userIcon = document.getElementById("userIcon");
    if (userIcon) {
        userIcon.addEventListener("click", function () {
            console.log("คุณคลิกที่ไอคอนแล้ว!");
        });
    }
});
function logout() {
    localStorage.removeItem("isLoggedIn"); // ลบสถานะล็อกอิน
    window.location.href = "login.html"; // กลับไปหน้า login
}
