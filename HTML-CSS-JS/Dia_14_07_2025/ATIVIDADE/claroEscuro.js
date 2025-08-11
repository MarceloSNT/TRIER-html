const tema = document.getElementById("tema");
const body = document.body;

tema.addEventListener("click", () => {
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  tema.classList.toggle("btn-outline-light");

  body.classList.toggle("bg-light");
  body.classList.toggle("text-dark");
  tema.classList.toggle("btn-outline-dark");
});
