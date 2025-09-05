// ==============================
// Animaciones hero con GSAP
// ==============================
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1.2, y: 20, opacity: 0, delay: 0.3, ease: "power2.out" });
gsap.from(".hero a", { duration: 1, scale: 0.8, opacity: 0, delay: 0.6, ease: "back.out(1.7)" });

// ==============================
// Funciones y eventos DOM
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    // Año actual
    const yearSpan = document.getElementById("year") || document.getElementById("currentYear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Inicializar carouseles sin autoplay
    const productosCarousel = document.querySelector('#productosCarousel');
    const serviciosCarousel = document.querySelector('#serviciosCarousel');

    if (productosCarousel) {
        new bootstrap.Carousel(productosCarousel, { interval: false, ride: false, touch: true });
    }
    if (serviciosCarousel) {
        new bootstrap.Carousel(serviciosCarousel, { interval: false, ride: false, touch: true });
    }

    // Ajusta altura de tarjetas para que no “salten” en mobile
    function ajustarAlturaCarousel(carouselSelector) {
        const carouselEl = document.querySelector(carouselSelector);
        if (!carouselEl) return;

        const items = carouselEl.querySelectorAll('.carousel-item .card-producto');
        if (!items.length) return;

        let maxHeight = 0;
        items.forEach(item => item.style.minHeight = 'auto'); // reset
        items.forEach(item => {
            if (item.offsetHeight > maxHeight) maxHeight = item.offsetHeight;
        });
        items.forEach(item => item.style.minHeight = maxHeight + 'px');
    }

    // Ajuste inicial y al redimensionar
    ajustarAlturaCarousel('#productosCarousel');
    ajustarAlturaCarousel('#serviciosCarousel');
    window.addEventListener('resize', () => {
        ajustarAlturaCarousel('#productosCarousel');
        ajustarAlturaCarousel('#serviciosCarousel');
    });
});
