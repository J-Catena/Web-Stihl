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




// Función para habilitar drag con el ratón, recibe el elemento y la instancia del carrusel
function enableMouseDragCarousel(carouselElement, carouselInstance) {
    if (!carouselElement || !carouselInstance) return;

    let isDragging = false;
    let startX = 0;

    carouselElement.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    carouselElement.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        const endX = e.clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                carouselInstance.next();
            } else {
                carouselInstance.prev();
            }
        }
        isDragging = false;
    });

    carouselElement.addEventListener("mouseleave", () => {
        // Cancela drag si el ratón sale del carrusel
        isDragging = false;
    });

    // Evita selección de texto al arrastrar
    carouselElement.addEventListener("mousemove", (e) => {
        if (isDragging) e.preventDefault();
    });

    // Por si sueltas fuera del carrusel
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Crea instancias y guarda referencias, desactivando autoplay con interval: false
    const productosCarousel = new bootstrap.Carousel('#productosCarousel', { touch: true, interval: false });
    const serviciosCarousel = new bootstrap.Carousel('#serviciosCarousel', { touch: true, interval: false });

    // Añade soporte drag con ratón pasando elemento e instancia
    enableMouseDragCarousel(document.querySelector('#productosCarousel'), productosCarousel);
    enableMouseDragCarousel(document.querySelector('#serviciosCarousel'), serviciosCarousel);
});


document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

