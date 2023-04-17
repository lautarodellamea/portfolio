const d = document,
  ls = localStorage;

export default function darkTheme(btn) {
  const $themeBtn = d.querySelector(btn),
    darkColor = "#18191d",
    lightColor = "#f4f5f7",
    textDarkColor = " #f5f4f7",
    textLightColor = "#212228",
    bgDarkElements = "#212228",
    bgLightElements = "#fff",
    hoverDark = "#18191d",
    hoverLight = "#f5f4f7",
    investedDark = "#18191d",
    investedLight = "#f5f4f7";

  let moon = "☾",
    sun = "☼";

  const lightMode = () => {
    document.documentElement.style.setProperty("--bg-light-body", lightColor);
    document.documentElement.style.setProperty("--text-color", textLightColor);
    document.documentElement.style.setProperty(
      "--invested-light",
      investedDark
    );
    document.documentElement.style.setProperty("--hover-light", hoverLight);
    document.documentElement.style.setProperty(
      "--bg-light-elements",
      bgLightElements
    );
    /*     $logoOscuro.classList.add("none");
    $logoClaro.classList.remove("none"); */
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    document.documentElement.style.setProperty("--bg-light-body", darkColor);
    document.documentElement.style.setProperty("--text-color", textDarkColor);
    document.documentElement.style.setProperty(
      "--invested-light",
      investedDark
    );
    document.documentElement.style.setProperty("--hover-light", hoverDark);
    document.documentElement.style.setProperty(
      "--bg-light-elements",
      bgDarkElements
    );

    /*     $logoOscuro.classList.remove("none");
    $logoClaro.classList.add("none"); */
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
