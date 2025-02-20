document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
  
    // Alternar menú móvil
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", !mobileMenu.classList.contains("hidden"));
    });
  
    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  
    // Manejo del tema oscuro
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const setTheme = (isDark) => {
      htmlElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
      sunIcon.classList.toggle("hidden", !isDark);
      moonIcon.classList.toggle("hidden", isDark);
    };
  
    setTheme(savedTheme === "dark" || (!savedTheme && prefersDark));
  
    themeToggleBtn.addEventListener("click", () => {
      setTheme(!htmlElement.classList.contains("dark"));
    });
  
    // Escuchar cambios en el sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      setTheme(e.matches);
    });
  });
  