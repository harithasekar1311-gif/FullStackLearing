const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");


// Open and close mobile menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close menu after clicking a navigation link

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});