const data = [
    { id: 1, date: "2025-03-21", details: "เปลี่ยนหลอดไฟ" },
    { id: 2, date: "2025-03-20", details: "ซ่อมโต๊ะ" },
    { id: 3, date: "2025-03-19", details: "เช็คปลั๊กไฟ" },
    { id: 4, date: "2025-03-18", details: "เปลี่ยนกระจก" },
    { id: 5, date: "2025-03-17", details: "ซ่อมพัดลม" },
    { id: 6, date: "2025-03-16", details: "ทาสีห้อง" },
];

const rowsPerPage = 4;
let currentPage = 1;

function displayTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.date}</td>
            <td>${row.details}</td>
            <td><button class="evaluate-btn" onclick="goToEvaluation()">⚒️</button></td>
        `;
        tableBody.appendChild(tr);
    });

    updatePagination();
}

function updatePagination() {
    const pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";

    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            displayTable();
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
        displayTable();
    }
}

function nextPage() {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayTable();
    }
}

document.addEventListener("DOMContentLoaded", displayTable);

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

function goToEvaluation() {
    window.location.href = "Evaluation pape.html";
}