const navLinks = document.querySelectorAll('.navbarPadre .nav-link');
const sections = document.querySelectorAll('main section');

const offset = 100; 

function activarEnlaceAlScroll() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {

        const sectionId = section.getAttribute('id');
        
        const targetLink = document.querySelector(`.navbarPadre .nav-link[href="#${sectionId}"]`);
        
        if (!targetLink) return; 

        const rect = section.getBoundingClientRect();
        
        const isSectionActive = rect.top <= offset && rect.bottom >= offset;

        navLinks.forEach(link => link.classList.remove('active'));

        if (isSectionActive) {
            targetLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activarEnlaceAlScroll);

document.addEventListener('DOMContentLoaded', activarEnlaceAlScroll);


/**
 * @param {HTMLElement} elemento - El elemento que disparó el evento (this)
 */
function agrandarElemento(elemento) {
    elemento.style.transform = "scale(1.1)";
    elemento.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
}


function restaurarElemento(elemento) {
    elemento.style.transform = "scale(1.0)";
    elemento.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
}

/**
 * @param {HTMLElement} boton 
 * @param {string} email 
 */
function mostrarContacto(boton, email) {
    let infoParrafo = document.getElementById("infoContacto");
    
    infoParrafo.innerText = "Email de contacto: " + email;
    infoParrafo.style.display = "block";
    
    boton.style.display = "none";
}