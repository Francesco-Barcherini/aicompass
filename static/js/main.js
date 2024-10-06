// Example for sticky navbar behavior
window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 100) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
};