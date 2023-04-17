const d = document;

export default function searchFilters(input, selector) {
  d.addEventListener("input", (e) => {
    if (e.target.matches(input)) {
      const searchText = e.target.value.toLowerCase(); // Convertir a minúsculas

      // para resetear o vaciar el input, pero ya lo hace por defecto
      /* if (e.key === "Escape") {
        e.target.value = "";
      } */

      d.querySelectorAll(selector).forEach((el) => {
        const text = el.textContent.toLowerCase(); // Convertir a minúsculas
        if (text.includes(searchText)) {
          el.classList.remove("filter");
        } else {
          el.classList.add("filter");
        }
      });
    }
  });
}
