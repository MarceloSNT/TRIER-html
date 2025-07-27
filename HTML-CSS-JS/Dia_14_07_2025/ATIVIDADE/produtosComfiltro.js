const arrayProdutos = [
  {
    marca: "BMW",
    modelo: "M4",
    preco: "R$500.000",
    imagem: "../img/bmw_m4.jpg",
  },
  {
    marca: "Mustang",
    modelo: "Mach 1",
    preco: "R$500.000",
    imagem: "../img/mustang_mach1.jpg",
  },
  {
    marca: "Porsche",
    modelo: "CarreraGT",
    preco: "R$500.000",
    imagem: "../img/porscheCarrera.jpg",
  },
  {
    marca: "Mustang",
    modelo: "GT500",
    preco: "R$500.000",
    imagem: "../img/gt-500.jpg",
  },
  {
    marca: "Porsche",
    modelo: "911",
    preco: "R$500.000",
    imagem: "../img/porsche-911.jpg",
  },
  {
    marca: "Bmw",
    modelo: "430i",
    preco: "R$500.000",
    imagem: "../img/bmw-430i.jpg",
  },
  {
    marca: "Mustang",
    modelo: "1969",
    preco: "R$500.000",
    imagem: "../img/mustang-1969.jpg",
  },
  { marca: "BMW", modelo: "I8", preco: "500.000", imagem: "../img/bmw_i8.jpg" },
];

const btn = document.getElementById("botao");

function gerarCards(produtos) {
  const cont = document.getElementById("mostrar-produtos");
  cont.innerHTML = produtos
    .map(
      (prod) => `
    <div class="card mb-5 col-md-4 col-lg-3 border border-light rounde rounded-3 text-center bg-dark text-light p-0 pb-3">
    <img src=${prod.imagem} class="image-fluid rounded rounded-3" style="height:200px">
      <h2>${prod.marca}</h2>
      Modelo: ${prod.modelo}<br>
      Preço: ${prod.preco}
    </div>
  `
    )
    .join("");
}

function listarProdutos() {
  const selectValue = document.getElementById("selectID").value;
  const valor = selectValue.toLowerCase();

  const filtrados = selectValue
    ? arrayProdutos.filter((filtrar) => filtrar.marca.toLowerCase() === valor)
    : arrayProdutos;

  gerarCards(filtrados);
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("botaoID").addEventListener("click", listarProdutos);
  listarProdutos(); // exibe todos no carregamento
});
