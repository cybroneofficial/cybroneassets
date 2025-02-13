document.getElementById("js-home").addEventListener("click", () => {
    window.open("index.html", "_self");
});

document.getElementById("js-assets").addEventListener("click", () => {
    window.open("assets.html", "_self");
});

document.getElementById("js-about").addEventListener("click", () => {
    window.open("about.html", "_self");
});

document.getElementById("js-search").addEventListener("keypress", () => {
    
    var event = new KeyboardEvent;

    if(event.keyCode === 13)
    {    
        window.open("HTMLs/assets.html", "_self");
    }
});

// Function to format price with Euro symbol
function formatPrice(priceString) {
    // Convert the string to a number (assuming it represents cents)
    var priceCents = parseInt(priceString, 10); // Parse the string to an integer
    
    // Convert cents to euros
    var priceEuro = priceCents / 100;
    
    // Format the price with the Euro symbol
    return priceEuro.toFixed(2); // toFixed(2) ensures two decimal places
}

// Function to extract query parameters from URL
function getQueryParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
        productName: urlParams.get('productName'),
        price: urlParams.get('price'),
        imageUrl: urlParams.get('image'), // Using 'image' parameter name
        tags: urlParams.get('tags'),
        downloadName: urlParams.get('downloadName'),
        downloadLink: urlParams.get('downloadLink')
    };
}

// Function to display the product name and image
function displayProductInfo() {
    const queryParams = getQueryParams();
    const productNameElement = document.getElementById('productName');
    productNameElement.textContent = "Product: " + queryParams.productName;
    const productPriceElement = document.getElementById('productPrice');
    productPriceElement.textContent = "Price: €" + queryParams.price;
    const productImageElement = document.getElementById('productImage');
    productImageElement.src = queryParams.imageUrl; // Set image source
    const productTagsElement = document.getElementById('ProductTags');
    productTagsElement.textContent = "Tags: " + queryParams.tags;
    console.log(queryParams.price);
}

// Function to handle back button click
function goBack() {
    window.history.back();
}

// Display product info after page load
window.addEventListener("DOMContentLoaded", () => {
    displayProductInfo();
})
