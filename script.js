const themeToggle = document.getElementById("theme-toggle");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const galleryImages = document.querySelectorAll(".gallery .certificado, .project img"); // Certificados e imagens dos projetos

// Alternância do tema claro/escuro
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.innerHTML = document.body.classList.contains("dark-theme")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

// Ampliação de imagens (certificados e projetos)
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});

// Fechar lightbox ao clicar no "x"
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Fechar lightbox ao clicar fora da imagem
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
