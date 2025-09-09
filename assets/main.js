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

    // ==============================
    // Traducción con Google Translate
    // ==============================
    const langLinks = document.querySelectorAll(".translate-link");

    langLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const lang = this.dataset.lang;

            const select = document.querySelector("#google_translate_element select");

            if (select) {
                // Si el <select> ya está disponible, cambia el idioma
                select.value = lang;
                select.dispatchEvent(new Event("change"));
            } else {
                // Reintentar hasta 10 veces cada 300ms
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    const sel = document.querySelector("#google_translate_element select");
                    if (sel) {
                        sel.value = lang;
                        sel.dispatchEvent(new Event("change"));
                        clearInterval(interval);
                    }
                    if (attempts > 10) {
                        clearInterval(interval);
                        // Fallback: usar cookie para forzar idioma y recargar la página
                        document.cookie = `googtrans=/es/${lang};path=/`;
                        document.cookie = `googtrans=/es/${lang};domain=.${location.hostname};path=/`;
                        location.reload();
                    }
                }, 300);
            }
        });
    });
});


