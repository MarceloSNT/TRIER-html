document
    .getElementById("form-clientes")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        const newCliente = { nome, email };

        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        clientes.push(newCliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        document.getElementById("form-clientes").reset();
        listarClientes();
    });

function listarClientes() {
    const container = document.getElementById("lista-clientes");
    container.innerHTML = "";

    const clientes = JSON.parse(localStorage.getItem("clientes"))||[];

    if (clientes.length === 0) {
        container.innerHTML = "<p> Nenhum cliente cadastrado </p>";
        return;
    }

    clientes.forEach((cliente) => {
        const div = document.createElement("div");
        div.className = "cliente";
        div.innerHTML = `<strong>${cliente.nome}</strong><br>Email: ${cliente.email}`;
        container.appendChild(div);
    });
}

window.addEventListener("DOMcontentLoaded", listarClientes);