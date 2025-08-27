// Animación de entrada con GSAP
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1.2, y: 20, opacity: 0, delay: 0.3, ease: "power2.out" });
gsap.from(".hero a", { duration: 1, scale: 0.8, opacity: 0, delay: 0.6, ease: "back.out(1.7)" });


document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});




// Función para habilitar drag con el ratón
function enableMouseDragCarousel(carouselId) {
    const carousel = document.querySelector(carouselId);
    if (!carousel) return;

    let isDragging = false;
    let startX = 0;

    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    carousel.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        const endX = e.clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                bootstrap.Carousel.getInstance(carousel)?.next();
            } else {
                bootstrap.Carousel.getInstance(carousel)?.prev();
            }
        }
        isDragging = false;
    });

    // Evita selección de texto al arrastrar
    carousel.addEventListener("mousemove", (e) => {
        if (isDragging) e.preventDefault();
    });

    // Por si sueltas fuera del carrusel
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Activa swipe táctil automáticamente con Bootstrap
    new bootstrap.Carousel('#productosCarousel', { touch: true });
    new bootstrap.Carousel('#serviciosCarousel', { touch: true });

    // Añade soporte drag con ratón
    enableMouseDragCarousel('#productosCarousel');
    enableMouseDragCarousel('#serviciosCarousel');
});

