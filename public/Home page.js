document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
  
    // ✅ ตรวจว่ามีสถานะล็อกอิน
    if (!isLoggedIn) {
      window.location.href = "Login.html"; // เปลี่ยนตามชื่อไฟล์จริง
    }
  
    // ป้องกันการคลิกโลโก้
    const logo = document.querySelector(".logo");
    if (logo) {
      logo.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("คลิกที่โลโก้ถูกบล็อก");
      });
    }
  
    // ป้องกันการกดปุ่มต่างๆ ถ้ายังไม่ล็อกอิน
    function checkLogin(event) {
      if (!localStorage.getItem("isLoggedIn")) {
        event.preventDefault();
        window.location.href = "Login.html"; // ให้ตรงชื่อไฟล์
      }
    }
  
    let buttons = document.querySelectorAll("a, button");
    buttons.forEach(button => {
      button.addEventListener("click", checkLogin);
    });
  
    // การคลิกไอคอนโปรไฟล์
    const userIcon = document.getElementById("userIcon");
    if (userIcon) {
      userIcon.addEventListener("click", function () {
        console.log("คุณคลิกที่ไอคอนแล้ว!");
      });
    }
  });
  
  // ✅ ปุ่ม logout
  function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "Login.html";
  }
  