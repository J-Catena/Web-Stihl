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

    // 🔹 Año actual
    const yearSpan = document.getElementById("year") || document.getElementById("currentYear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 🔹 Inicializar carouseles Bootstrap
    const productosCarousel = new bootstrap.Carousel('#productosCarousel', { touch: true, interval: false });
    const serviciosCarousel = new bootstrap.Carousel('#serviciosCarousel', { touch: true, interval: false });

    // 🔹 Ajusta altura de tarjetas del carousel móvil
    function ajustarAlturaCarousel(carouselSelector) {
        const carouselEl = document.querySelector(carouselSelector);
        if (!carouselEl) return;

        const items = carouselEl.querySelectorAll('.carousel-item .card, .carousel-item .card-producto');
        if (!items.length) return;

        let maxHeight = 0;

        // Resetear altura antes de medir
        items.forEach(item => item.style.minHeight = 'auto');

        // Calcular altura máxima
        items.forEach(item => {
            if (item.offsetHeight > maxHeight) maxHeight = item.offsetHeight;
        });

        // Aplicar altura máxima a todos los items
        items.forEach(item => item.style.minHeight = maxHeight + 'px');
    }

    // Ajuste inicial y al redimensionar
    ajustarAlturaCarousel('#productosCarousel');
    window.addEventListener('resize', () => ajustarAlturaCarousel('#productosCarousel'));

    // 🔹 Clonar items para mostrar múltiples en desktop
    const carousel = document.querySelector('#productosCarousel');
    if (carousel && window.innerWidth >= 992) {
        const items = carousel.querySelectorAll('.carousel-item');
        items.forEach(item => {
            const next = item.nextElementSibling || items[0];
            const clone = next.cloneNode(true);
            item.appendChild(clone);
        });
    }

});
