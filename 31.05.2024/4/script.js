const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

function showImage(index) {
    document.getElementById("image").src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
