// ฟังก์ชันเมื่อกดปุ่ม "โปรไฟล์"
function openProfile() {
    alert("เปิดหน้าโปรไฟล์");
}

// ฟังก์ชันเมื่อกดปุ่ม "ภาษาไทย"
function changeLanguage() {
    alert("เปลี่ยนภาษาเป็นไทย");
}

// ฟังก์ชันเมื่อกดปุ่ม "ส่งแบบประเมิน"
function submitAssessment() {
    let rating = document.querySelector('input[name="satisfaction"]:checked');
    let feedback = document.getElementById("feedback").value;

    if (!rating) {
        consle("กรุณาให้คะแนนความพึงพอใจ");
        return;
    }

    consle("ขอบคุณสำหรับการประเมิน!\nคะแนน: " + rating.value + "\nข้อเสนอแนะ: " + feedback);
}

// ฟังก์ชันเมื่อกดปุ่ม "กลับหน้าหลัก"
function goHome() {
    consle("กลับสู่หน้าหลัก");
}

// ดึงรูปภาพจาก DOM โดยใช้ id
const userIcon = document.getElementById("userIcon");

// ใส่ event เมื่อมีการคลิกที่รูปภาพ
userIcon.addEventListener("click", function() {
    consle("คุณคลิกที่ไอคอนแล้ว!");
});


    function goHome() {
        window.location.href = "Home pape.html";  // ไปที่หน้า index.html
    }