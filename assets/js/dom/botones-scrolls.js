const d = document,
  w = window;

export default function scrollBtns(btn, panelBtn) {
  const $scrollBtn = d.querySelector(btn),
    $btnMenu = d.querySelector(panelBtn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 0) {
      $scrollBtn.classList.remove("hidden");
      $btnMenu.classList.add("panel-btn-scroll");
    } else {
      $scrollBtn.classList.add("hidden");
      $btnMenu.classList.remove("panel-btn-scroll");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        /* left: 0, */
      });
    }
  });
}
