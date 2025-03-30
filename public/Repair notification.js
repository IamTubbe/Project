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
// ดึงรูปภาพจาก DOM โดยใช้ id
const userIcon = document.getElementById("userIcon");

// ใส่ event เมื่อมีการคลิกที่รูปภาพ
userIcon.addEventListener("click", function() {
    consle("คุณคลิกที่ไอคอนแล้ว!");
});