const header = document.getElementById('header');
const photo = document.getElementById('banner-img');
const finanzapp = document.getElementById('finanzapp');
const crmclientes = document.getElementById('crmclientes');
const veterinapp = document.getElementById('veterinapp');
const movil = document.getElementById('movil');
const contacto = document.getElementById('contacto');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;
    let position = photo.getBoundingClientRect().top;

    // Animation for the header banner
    if (currentScrollY > 1) {
        if (currentScrollY > lastScrollY) {
            header.classList.add('header--scroll-down');
            header.classList.remove('header--scroll-up');
        }
        else {
            header.classList.remove('header--scroll-down');
            header.classList.add('header--scroll-up');
        }

        lastScrollY = currentScrollY;
    } else {
        header.classList.remove('header--scroll-up');
    }

    // Animation for the projects -> finanzapp
    if (position < -900) {
        finanzapp.classList.remove('project-nodisplay');
        finanzapp.classList.add('project');
    }

    // Animation for the projects -> crmclientes
    if (position < -1700) {
        crmclientes.classList.remove('project-nodisplay');
        crmclientes.classList.add('project');
    }

    // Animation for the projects -> veterinapp
    if (position < -2300) {
        veterinapp.classList.remove('project-nodisplay');
        veterinapp.classList.add('project');
    }

    // Animation for the projects -> movil
    if (position < -3000) {
        movil.classList.remove('project-nodisplay');
        movil.classList.add('project');
    }

    // Animation for the contacto
    if (position < -3320) {
        contacto.classList.remove('contacto-nodisplay');
        contacto.classList.add('contacto');
    }
});

