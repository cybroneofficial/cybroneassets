import products from './products.js'; // Import the products array

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const imageContainer = document.getElementById('image-container');
    const backButton = document.getElementById('backButton');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const modeText = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        this.textContent = `Turn to ${modeText}`;
    });

    // Back button functionality
    backButton.addEventListener('click', function () {
        window.history.back();
    });

    // Get productId from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    // Get product information based on productId
    const product = products.find(product => product.id == productId);
    if (product) {
        const image = document.createElement('img');
        image.src = product.image;
        imageContainer.appendChild(image);
    }
});