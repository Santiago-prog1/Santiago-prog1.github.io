// ==========================
// PORTFOLIO SANTIAGO BRINGAS
// main.js
// ==========================


// ==========================
// REVEAL ANIMATIONS
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);


// ACTIVAR AL CARGAR

window.addEventListener("load", () => {

    revealOnScroll();

});


// ==========================
// NAVBAR EFFECT
// ==========================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(8,17,32,0.98)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(8,17,32,0.92)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================
// FLOATING CARDS DELAY
// ==========================

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.7}s`;

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("Portfolio Santiago Bringas cargado correctamente.");
