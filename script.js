// Smooth Scroll Function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animasi kecil saat scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    let pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Set animasi default
document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease";
});
