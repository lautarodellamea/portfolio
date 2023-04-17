const d = document;

export default function slider(btnPrev, btnNext, slide) {
  const $slides = d.querySelectorAll(slide);
  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target.closest(`${btnPrev}`)) {
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }

    if (e.target.closest(`${btnNext}`)) {
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
}
