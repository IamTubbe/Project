document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("device_image");
    const viewImageButton = document.getElementById("viewImage");
    
    viewImageButton.addEventListener("click", function() {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imageWindow = window.open("", "Image Preview");
                imageWindow.document.write('<img src="' + e.target.result + '" style="max-width:100%; height:auto;">');
            };
            
            reader.readAsDataURL(file);
        } else {
            alert("กรุณาเลือกไฟล์รูปภาพก่อน");
        }
    });
});
