// ===============================
// PORTFOLIO SANTIAGO BRINGAS
// Archivo: js/main.js
// Funciones: animaciones, navbar y experiencia de usuario
// ===============================


// Cambia el estilo del menú cuando el usuario hace scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
});


// Animación de aparición para tarjetas y secciones
const elementosAnimados = document.querySelectorAll(".card, .tech, .hero-text, .hero-image");

const observador = new IntersectionObserver(
    function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementosAnimados.forEach(function (elemento) {
    elemento.classList.add("hidden");
    observador.observe(elemento);
});


// Cierra el menú mobile al tocar un enlace
const enlacesMenu = document.querySelectorAll("nav a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        const menu = document.querySelector("nav ul");

        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});


// Mensaje simple en consola para presentación profesional
console.log("Portfolio de Santiago Bringas cargado correctamente.");
