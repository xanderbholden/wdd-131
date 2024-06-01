document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.getElementById('heroImage');
    const images = [
        'images/IMG_1099.JPG',
        'images/IMG_1100.JPG', 
        'images/IMG_0977.JPG'
    ];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.src = images[currentIndex];
    }, 10000); // Change image every 10 seconds

});

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('responsive');
}
