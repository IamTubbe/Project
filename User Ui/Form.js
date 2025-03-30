document.addEventListener("DOMContentLoaded", function () {
    let categorySelect = document.getElementById("category");
    let detailsTextarea = document.getElementById("details");

    categorySelect.addEventListener("change", function () {
        let selectedValue = categorySelect.value;

        switch (selectedValue) {
            case "computer":
                detailsTextarea.value = "อุปกรณ์คอมพิวเตอร์เสีย เช่น จอภาพ คีย์บอร์ด หรือเมาส์";
                break;
            case "furniture":
                detailsTextarea.value = "เฟอร์นิเจอร์ชำรุด เช่น โต๊ะ เก้าอี้ หรือชั้นวางของ";
                break;
            case "electrical":
                detailsTextarea.value = "เครื่องใช้ไฟฟ้าเสีย เช่น พัดลม หลอดไฟ หรือเครื่องปรับอากาศ";
                break;
            default:
                detailsTextarea.value = "";
        }
    });
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