const d = document,
  ls = localStorage;

export default function darkTheme(
  btn,
  classDark,
  classDarkEnlaces,
  classDarkWork,
  classDarkHead,
  logoClaro,
  logoOscuro
) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $selectorsEnlace = d.querySelectorAll("[enlace-dark]"),
    $selectorsWork = d.querySelectorAll("[data-dark-work]"),
    $selectorsHead = d.querySelectorAll("[data-dark-head]"),
    $logoClaro = d.querySelector(logoClaro),
    $logoOscuro = d.querySelector(logoOscuro);

  let moon = "☾",
    sun = "☼";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $selectorsEnlace.forEach((el) => el.classList.remove(classDarkEnlaces));
    $selectorsWork.forEach((el) => el.classList.remove(classDarkWork));
    $selectorsHead.forEach((el) => el.classList.remove(classDarkHead));

    $logoOscuro.classList.add("none");
    $logoClaro.classList.remove("none");
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $selectorsEnlace.forEach((el) => el.classList.add(classDarkEnlaces));
    $selectorsWork.forEach((el) => el.classList.add(classDarkWork));
    $selectorsHead.forEach((el) => el.classList.add(classDarkHead));

    $logoOscuro.classList.remove("none");
    $logoClaro.classList.add("none");
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }

    if (ls.getItem("theme") === "light") {
      lightMode();
    }
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
