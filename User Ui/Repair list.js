// ตัวอย่างข้อมูลแจ้งซ่อม (แทนฐานข้อมูล)
const repairData = [
    { id: 1, date: "2025-03-20", details: "เครื่องปริ้นเสีย", status: "ฉุกเฉิน" },
    { id: 2, date: "2025-03-18", details: "ไฟไม่ติด", status: "เร่งด่วน" },
    { id: 3, date: "2025-03-17", details: "เครื่องเสียงไม่ทำงาน", status: "เร่งด่วน" },
    { id: 4, date: "2025-03-15", details: "เก้าอี้ชำรุด", status: "ปกติ" },
    { id: 6, date: "2025-03-12", details: "แอร์ไม่เย็น", status: "ฉุกเฉิน" },
    { id: 7, date: "2025-03-10", details: "โต๊ะพัง", status: "ปกติ" },
    { id: 8, date: "2025-03-08", details: "หน้าจอคอมไม่ติด", status: "เร่งด่วน" }
];

const rowsPerPage = 5;
let currentPage = 1;

// ฟังก์ชันแสดงตาราง
function displayTable(page) {
    const tableBody = document.getElementById("repairTable");
    tableBody.innerHTML = "";
    
    let start = (page - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedItems = repairData.slice(start, end);
    
    paginatedItems.forEach(item => {
        let row = `<tr>
            <td>${item.id}</td>
            <td>${item.date}</td>
            <td>${item.details}</td>
            <td class="status ${getStatusClass(item.status)}">${item.status}</td>
            <td><button class="edit-btn" onclick="editRepair(${item.id})">⚙️</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    updatePagination(); // เรียกใช้การอัปเดตหมายเลขหน้า
}

// ฟังก์ชันกำหนดสีสถานะ
function getStatusClass(status) {
    switch (status) {
        case "ฉุกเฉิน": return "status-urgent";
        case "เร่งด่วน": return "status-high";
        case "ปกติ": return "status-normal";
        case "ไม่เร่งด่วน": return "status-low";
        default: return "";
    }
}

function updatePagination() {
    const pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";

    const totalPages = Math.ceil(repairData.length / rowsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            displayTable(currentPage); // แสดงข้อมูลในหน้าที่ถูกเลือก
        };
        if (i === currentPage) {
            btn.style.backgroundColor = "#888";
            btn.style.color = "white";
        }
        pageNumbers.appendChild(btn);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable(currentPage); // แสดงข้อมูลในหน้าก่อนหน้า
    }
}

function nextPage() {
    const totalPages = Math.ceil(repairData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayTable(currentPage); // แสดงข้อมูลในหน้าถัดไป
    }
}

// ฟังก์ชันแก้ไขข้อมูล
function editRepair(id) {
    consle("แก้ไขข้อมูล ID: " + id);
}

// ฟังก์ชันกลับหน้าหลัก
function goHome() {
    window.location.href = "index.html"; // แก้ไขเป็นหน้าหลักที่ต้องการ
}

// โหลดตารางครั้งแรก
document.addEventListener("DOMContentLoaded", () => {
    displayTable(currentPage);
});
// ดึงรูปภาพจาก DOM โดยใช้ id
const userIcon = document.getElementById("userIcon");

// ใส่ event เมื่อมีการคลิกที่รูปภาพ
userIcon.addEventListener("click", function() {
    consle("คุณคลิกที่ไอคอนแล้ว!");
});

function editRepair() {
    window.location.href = "Correct.html";
}