// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    /* Navbar Toggle */
    const hamburger = document.querySelector('.hamburger');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    /* Smooth Scroll para Links Internos */
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(item.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });

    /* Carrossel de Imagens na Seção Hero */
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    window.plusSlides = plusSlides; // Torna a função acessível globalmente

    function showSlides(n) {
        let i;
        const slides = document.querySelectorAll('.hero-image .carousel-slide');

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    /* Animação de Barras de Estatísticas */
    function animateBars() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
        });
    }

    /* Verifica se a seção de estatísticas está na viewport */
    function checkScroll() {
        const statsSection = document.getElementById('statistics');
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (statsPosition < screenPosition) {
            animateBars();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);

    /* Animação de Aparição dos Elementos */
    function revealElements() {
        const reveals = document.querySelectorAll('.feature-card, .feature-item, .stat-chart');
        reveals.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealElements);

    /* Protótipo Interativo */
    function openPrototype(event) {
        event.preventDefault();
        window.open("https://figma.com/prototipo-pedalwise", "_blank");
    }

    const prototypeButtons = document.querySelectorAll(".view-prototype");
    prototypeButtons.forEach(button => {
        button.addEventListener("click", openPrototype);
    });
});
