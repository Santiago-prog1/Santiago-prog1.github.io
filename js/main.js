// ==========================
// PORTFOLIO SANTIAGO BRINGAS
// main.js
// ==========================


// ==========================
// ANIMACIONES REVEAL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8,17,32,0.98)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(8,17,32,0.92)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================
// EFECTO PARALLAX HERO
// ==========================

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    const hero = document.querySelector(".hero-section");

    hero.style.backgroundPositionY = `${scrolled * 0.4}px`;

});


// ==========================
// FLOATING CARDS EFFECT
// ==========================

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.6}s`;

});


// ==========================
// SCROLL SUAVE LINKS
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
