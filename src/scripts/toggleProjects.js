export default function toggleProjects() {
    const toggleBtn = document.getElementById("showMoreBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const extraProjects = document.querySelectorAll(".project-card.extra");
        if (extraProjects.length > 0 && extraProjects[0].classList.contains("hidden")) {
          extraProjects.forEach(card => card.classList.remove("hidden"));
          toggleBtn.textContent = "Ocultar proyectos";
        } else {
          extraProjects.forEach(card => card.classList.add("hidden"));
          toggleBtn.textContent = "Ver más proyectos";
        }
      });
    } else {
      console.warn('No se encontró el botón #showMoreBtn en el DOM.');
    }
  }