const themeToggle = document.getElementById("theme-toggle");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const galleryImages = document.querySelectorAll(".gallery .certificado");


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.innerHTML = document.body.classList.contains("dark-theme")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});


galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});


closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
