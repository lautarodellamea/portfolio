const d = document;
export default function contactForm() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]"); //capturamos todos los elementos requeridos

  //console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  //haremos las validaciones a medida que el usuario vaya ingresando letras. se podría validar al final también eso depende del desarrollador

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target, //guardamos para ahorrarnos escritura, serian los elementos que originan el evento
        pattern = $input.pattern || $input.dataset.pattern; //aca guarda lo que tenga de las dos cosas, en el caso del text area guardara el data-atributte que le asigne ya que no puede tener un pattern, este seria un operador cortocircuito

      //console.log($input, pattern);

      if (pattern && $input.value !== "") {
        //console.log("el input tiene patron");
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        //console.log("el input NO tiene patron");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response"),
      $msgApiFormsubmitContainer = d.querySelector(
        ".msg-api-formsubmit-container"
      ),
      $msgApiFormsubmit = d.querySelector(".msg-api-formsubmit");

    $loader.classList.remove("none-msg");

    fetch("https://formsubmit.co/ajax/lautarodm98@gmail.com", {
      method: "POST",

      //el elemento FormData parsea los elementos y valor de cada elemento de un formulario, osea el input y el texto que escribimos
      //el formulario es el objeto que genera el evento submit
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none-msg");
        $msgApiFormsubmitContainer.classList.remove("none-msg");
        $msgApiFormsubmit.textContent = `${json.message}`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        $msgApiFormsubmitContainer.classList.remove("none-msg");

        $msgApiFormsubmit.textContent = `Error ${err.status}: ${err.message}`;
      })
      .finally(() =>
        setTimeout(() => {
          $msgApiFormsubmitContainer.classList.add("none-msg");
          $response.innerHTML = "";
        }, 2000)
      );
  });
}
