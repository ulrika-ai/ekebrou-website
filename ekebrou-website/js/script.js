const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});


// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

const phoneLink = document.getElementById("phone-link");

function updatePhoneLink() {
    if (window.innerWidth <= 768) {
        phoneLink.href = "tel:+46702891767";
    } else {
        phoneLink.removeAttribute("href");
    }
}

updatePhoneLink();

window.addEventListener("resize", updatePhoneLink);


// Update navbar height
function updateNavbarHeight() {
    const navbar = document.querySelector("header");

    if (navbar) {
        document.documentElement.style.setProperty(
            "--navbar-height",
            `${navbar.offsetHeight}px`
        );
    }
}

updateNavbarHeight();

window.addEventListener("resize", updateNavbarHeight);