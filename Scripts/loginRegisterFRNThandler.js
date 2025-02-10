var x = document.getElementById("js-login");
var y = document.getElementById("js-register");
var z = document.getElementById("js-glass");

function registration() {
    x.style.left = "-450px"; // This will now transition smoothly
    y.style.left = "-527px";
    z.style.height = "500px"
}

function login(){
    x.style.left = "22px";
    y.style.left = "0px";
    z.style.height = "450px"
}

function myLogPassword() {
    const a = document.getElementById('logPassword');
    const b = document.getElementById('eye');
    const c = document.getElementById('eye-slash');

    if (a.type === "password") {
        a.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        a.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}

function myRegPassword() {
    const a = document.getElementById('registerPassword');
    const b = document.getElementById('eye2');
    const c = document.getElementById('eye-slash2');

    if (a.type === "password") {
        a.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        a.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}
