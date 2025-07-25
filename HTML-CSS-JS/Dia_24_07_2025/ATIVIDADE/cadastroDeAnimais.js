document
  .getElementById("form-animal")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const habitat = document.getElementById("habitat").value;

    const newAnimais = { nome, especie, idade, habitat };

    let animais = JSON.parse(localStorage.getItem("animais")) || [];
    animais.push(newAnimais);
    localStorage.setItem("animais", JSON.stringify(animais));

    document.getElementById("form-animal").reset();
    listarAnimais();
  });

function listarAnimais() {
  const container = document.getElementById("mostrar-animais");
  container.innerHTML = "";

  const animais = JSON.parse(localStorage.getItem("animais")) || [];

  if (animais.length === 0) {
    container.innerHTML = "<p>Nenhum animal cadastrado</p>";
    return;
  }

  animais.forEach((animal) => {
    const div = document.createElement("div");
    div.className = "animal";
    div.innerHTML = `<strong>${animal.nome}</strong><br>Espécie: ${animal.especie}<br>Idade: ${animal.idade}<br>Habitat: ${animal.habitat}`;
    container.appendChild(div);
  });
}
window.addEventListener("DOMcontentLoaded", listarAnimais);
