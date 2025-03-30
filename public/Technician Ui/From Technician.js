document.addEventListener("DOMContentLoaded", function() {
    const viewImageButton = document.getElementById("viewImage");

    viewImageButton.addEventListener("click", function() {
        // เรียก API หรือข้อมูลจากฐานข้อมูล
        fetch('/path-to-your-api') // แทนที่ '/path-to-your-api' ด้วย URL ของ API ที่ดึงรูปภาพจากฐานข้อมูล
            .then(response => response.json())
            .then(data => {
                if (data.image) { // ตรวจสอบว่ามีข้อมูลรูปภาพ
                    const imageWindow = window.open("", "Image Preview");
                    imageWindow.document.write('<img src="' + data.image + '" style="max-width:100%; height:auto;">');
                } else {
                    const noImageWindow = window.open("", "No Image", "width=400,height=200");
                    noImageWindow.document.write('<h2>ไม่มีรูปภาพ</h2>');
                }
            })
            .catch(error => {
                console.error('Error fetching image:', error);
                alert("เกิดข้อผิดพลาดในการดึงรูปภาพ");
            });
    });
});