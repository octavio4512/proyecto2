document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. Animaciones Suaves al hacer Scroll (Intersection Observer) */
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // El elemento aparece cuando el 10% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => observer.observe(el));

    /* 2. Selector de Idiomas Funcional (Español, Inglés, Quechua) */
    const langSelector = document.getElementById("language-selector");
    const langElements = document.querySelectorAll(".lang"); // Elementos con datos de traducción

    langSelector.addEventListener("change", (e) => {
        const selectedLang = e.target.value; 

        langElements.forEach(el => {
            const translation = el.getAttribute(`data-${selectedLang}`);
            
            if (translation) {
                // Si es un input/textarea cambia el placeholder
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.placeholder = translation;
                } else {
                    // Cambia el texto interno
                    el.innerHTML = translation; 
                }
            }
        });
    });

});
/* ========================================================
   LÓGICA DE LA VENTANA EMERGENTE DE PAGO SIMULADA
   ======================================================== */

// Abrir Modal
function openPaymentModal(e) {
    e.preventDefault(); // Evita que la página salte al hacer clic
    document.getElementById('payment-modal').classList.add('active');
}

// Cerrar Modal
function closePaymentModal() {
    document.getElementById('payment-modal').classList.remove('active');
}

// Procesar el "Pago" simulado
function processSimulatedPayment(e) {
    e.preventDefault(); // Evita que el formulario recargue la página
    
    // Muestra una alerta nativa al usuario
    alert("¡Pago procesado con éxito! Bienvenido a PymeSmart.\nRedirigiendo a tu panel de control...");
    
    // Cierra la ventana emergente
    closePaymentModal();
    
    // Redirige a la página oficial de PymeSmart en una nueva pestaña
    window.open("https://pysmart.infinityfree.io/", "_blank");
    
    // Opcional: limpiar los campos del formulario
    document.getElementById('payment-form').reset();
}