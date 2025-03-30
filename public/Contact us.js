document.addEventListener("DOMContentLoaded", function () {
    const technicians = [
        { name: "ช่างธนบดี", specialty: "คอมพิวเตอร์", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/p.png" },
        { name: "ช่างธีธัช", specialty: "แอร์", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/y.png" },
        { name: "ช่างศิฟัสส์", specialty: "อาคาร", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/t.png" },
        { name: "ช่างธีรวีณ์", specialty: "ไฟฟ้า", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/b.png" },
        { name: "ช่างอาทิตยา", specialty: "เครื่องใช้ไฟฟ้า", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/w.png" },
        { name: "ช่างกวาง", specialty: "สุขาภิบาล", email: "67030xxx@kmitl.ac.th", phone: "091-829-xxxx", image: "Gallery/i.jpg" }
    ];

    const itemsPerPage = 3;
    let currentPage = 1;

    function renderTechnicians(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const displayTechs = technicians.slice(start, end);

        let container = document.getElementById("technician-list");
        container.innerHTML = "";

        displayTechs.forEach(tech => {
            container.innerHTML += `
                <div class="technician-card">
                    <img src="${tech.image}" alt="${tech.name}">
                    <div class="technician-info">
                        <h3>${tech.name}</h3>
                        <div>
                            <p><strong>ช่างซ่อมสาย:</strong> ${tech.specialty}</p>
                            <p><strong>อีเมล:</strong> ${tech.email}</p>
                            <p><strong>หมายเลขโทรศัพท์:</strong> ${tech.phone}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        updatePagination();
    }

    function updatePagination() {
        let pageNumbers = document.getElementById("page-numbers");
        pageNumbers.innerHTML = "";
        let totalPages = Math.ceil(technicians.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.innerHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        }
         // เพิ่มคลาส active ให้กับหน้าปัจจุบัน
         if (i === currentPage) {
            pageButton.classList.add("active");
        }
    }

    window.changePage = function (page) {
        currentPage = page;
        renderTechnicians(page);
    };

    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) changePage(currentPage - 1);
    });

    document.getElementById("next").addEventListener("click", () => {
        if (currentPage < Math.ceil(technicians.length / itemsPerPage)) changePage(currentPage + 1);
    });

    renderTechnicians(currentPage);
});
document.addEventListener("DOMContentLoaded", function () {
    // ปิดการคลิกที่โลโก้
    document.getElementById("logo").addEventListener("click", function (event) {
        event.preventDefault(); // ป้องกันพฤติกรรมเริ่มต้น
        event.stopPropagation(); // หยุดเหตุการณ์ไม่ให้แพร่กระจาย
        console.log("โลโก้ถูกปิดการคลิก");
    });

    // ทำให้ปุ่มอื่นๆ กดได้ตามปกติ
    document.querySelectorAll("button, a").forEach(function (element) {
        element.addEventListener("click", function () {
            console.log("ปุ่มถูกกด:", this.innerText || this.id);
        });
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