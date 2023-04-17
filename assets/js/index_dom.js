import hamburgerMenu from "./dom/menu_hamburgesa.js";
import scrollBtns from "./dom/botones-scrolls.js";
import searchFilters from "./dom/filtro_busquedas.js";
import slider from "./dom/carrusel.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactForm from "./dom/formulario_contacto.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollBtns(".scroll-top-btn", ".panel-btn");
  searchFilters(".card-filter", ".card");
  slider(".prev", ".next", ".slider-slide");
  contactForm();
});

darkTheme(".dark-theme-btn", ".logo-claro", ".logo-oscuro");
