import products from './products.js';

document.addEventListener('DOMContentLoaded', function () {
    const productBox = document.getElementById('product-box');

    // Dynamically generate product buttons
    products.forEach(product => {
        const button = document.createElement('button');
        button.textContent = product.name;
        button.dataset.productId = product.id;
        button.classList.add('product-button');
        productBox.appendChild(button);
    });

    // Add click event listener to each product button
    const productButtons = document.querySelectorAll('.product-button');
    productButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.dataset.productId;
            window.location.href = `test2.html?productId=${productId}`;
        });
    });
});
