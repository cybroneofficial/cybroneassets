document.getElementById("js-home").addEventListener("click", () => {
    window.open("index.html", "_self");
});

document.getElementById("js-assets").addEventListener("click", () => {
    window.open("assets.html", "_self");
});

document.getElementById("js-about").addEventListener("click", () => {
    window.open("about.html", "_self");
});

document.getElementById("contact").addEventListener("click", () => {
    window.open("about.html", "_self");
});

document.getElementById("createAccount").addEventListener("click", () => {
    window.open("LoginSignUp.html", "_self");
});

document.getElementById("cart").addEventListener("click", () => {
    window.open("cart.html", "_self");
});

document.getElementById("js-search").addEventListener("keypress", (event) => {
    
    if(event.keyCode === 13)
    {    
        window.open("assets.html", "_self");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('#createAccount');
    const dropMenu = document.querySelector('.dropMenu');

    // Add hover event listeners
    createButton.addEventListener('mouseover', () => {
        dropMenu.classList.add('open'); // Add the 'open' class to start the transition
    });

    createButton.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropMenu.matches(':hover')) {
                dropMenu.classList.remove('open'); // Remove the 'open' class to hide
            }
        }, 100);
    });

    dropMenu.addEventListener('mouseleave', () => {
        dropMenu.classList.remove('open'); // Hide the dropdown when leaving it
    });
});

