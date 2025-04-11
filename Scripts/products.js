// Define an array of product objects with fixed prices
const products = [
    { id: "footballBtn", name: "Football", price: "0001", tags: ["Low-Poly", "Sport"],image: "Images, Videos/Football.png", downloadName: "Football.zip", downloadLink: "/Products/Football.zip" },
    { id: "footballPitchBtn", name: "Football Pitch", price: "0200", tags: ["Low-Poly", " Sports"], image: "Images, Videos/pitch.png" },
    { id: "TennisBtn", name: "Tennis Racket", price: "0099", tags: "Low-Poly", image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "TennisCourtBtn", name: "Tennis Court", price: "0199", tags: "Low-Poly", image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "VollyballBtn", name: "Vollyball ball", price: "0100", tags: "Low-Poly", image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "VollyballCourtBtn", name: "Vollyball Court", price: "0299", tags: "Low-Poly", image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "BadmintionBtn", name: "Badminton Racket", price: "0099", tags: "Low-Poly", image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "BadmintionCourtBtn", name: "Badminton Court", price: "0299", tags: 'Low-Poly', image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "MOGBtn", name: "MOG-910", price: "0699", tags: 'Weapon', image: "Images, Videos/Fabric004_4K-PNG_Color.png" },
    { id: "FireBtn", name: "Fire VFX", price: "0499", tags: "Fire", image: "Images, Videos/Fabric004_4K-PNG_Color.png" }
]

// Function to format price with Euro symbol
function formatPrice(priceString) {
    // Convert the string to a number (assuming it represents cents)
    var priceCents = parseInt(priceString, 10); // Parse the string to an integer
    
    // Convert cents to euros
    var priceEuro = priceCents / 100;
    
    // Format the price with the Euro symbol
    return priceEuro.toFixed(2); // toFixed(2) ensures two decimal places
}

function performSearch() {
    const query = document.getElementById('js-search').value;
    
    // Send the search query to the Flask server
    fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const productSection = document.getElementById("products");
        productSection.innerHTML = ''; // Clear existing products
        
        // Check if results are returned and handle accordingly
        if (data.results && data.results.length > 0) {
            data.results.forEach(product => {
                const button = document.createElement("button");
                const productPrice = formatPrice(product.price); // Format the price
                button.innerHTML = `<img src="${product.image}" class="product-image"><p>Product: ${product.name}</p><p>Price: €${productPrice}</p><button class="buy">Buy Now</button>`;
                button.id = product.id;
                button.className = "product-button"; // Add the class for styling
                button.onclick = function() {
                    window.location.href = `purchase.html?productName=${encodeURIComponent(product.name)}&price=${productPrice}&image=${product.image}&tags=${product.tags.join(', ')}&downloadName=${product.downloadName}&downloadLink=${product.downloadLink}`;
                };
                productSection.appendChild(button);
            });
        } else {
            productSection.innerHTML = '<p>No products found.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching search results. Please try again later.');
    });
}

// Function to generate buttons for each product
function generateProductButtons() {
    const productSection = document.getElementById("products");
    products.forEach(product => {
        const button = document.createElement("button");
        const productPrice = formatPrice(product.price); // Format the price
        button.innerHTML = `<img src="${product.image}" class="product-image"><p>Product: ${product.name}</p><p>Price: €${productPrice}</p><button class="buy">Buy Now</button>`;
        button.id = product.id;
        button.className = "product-button"; // Add the class for styling
        button.onclick = function() {
            // Redirect to order page with product name as query parameter
            window.location.href = `purchase.html?productName=${encodeURIComponent(product.name)}&price=${productPrice}&image=${product.image}&tags=${product.tags}&downloadName=${product.downloadName}&downloadLink=${product.downloadLink}`;
        };
        productSection.appendChild(button);
    });
}

// Call the function to generate buttons
generateProductButtons();

