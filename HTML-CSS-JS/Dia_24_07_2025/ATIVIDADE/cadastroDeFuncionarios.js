document
  .getElementById("form-funcionario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeInput").value;
    const cargo = document.getElementById("cargoInput").value;
    const departamento = document.getElementById("departamentoInput").value;
    const salario = document.getElementById("salarioInput").value;

    const newFuncionarios = { nome, cargo, departamento, salario };

    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    funcionarios.push(newFuncionarios);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    document.getElementById("form-funcionario").reset();
    listarFuncionarios();
  });

function listarFuncionarios() {
  const container = document.getElementById("mostrar-funcionarios");
  container.innerHTML = "";

  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  if (funcionarios.length === 0) {
    container.innerHTML = "<p>Nenhum funcionário cadastrado</p>";
    return;
  }

  funcionarios.forEach((funcionario) => {
    const div = document.createElement("div");
    div.className = "mostrarFuncionarios";
    div.innerHTML = `<strong>${funcionario.nome}</strong><br>Cargo: ${funcionario.cargo}<br>Departamento: ${funcionario.departamento}<br>Salário: ${funcionario.salario}<br><p></p>`;
    container.appendChild(div);
  });
}
window.addEventListener("DOMContentLoaded", listarFuncionarios);
