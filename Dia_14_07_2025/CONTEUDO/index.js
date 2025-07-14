function somar() {
  const primeiroNumero = Number(
    document.getElementById("primeiroNumero").value
  );
  const segundoNumero = Number(document.getElementById("segundoNumero").value);

  window.alert(
    "A soma dos númmeros inseridos é: " + (primeiroNumero + segundoNumero)
  );
}
function multiplica() {
  const primeiroNumeroMult = Number(
    document.getElementById("primeiroNumeroMult").value
  );
  const segundoNumeroMult = Number(
    document.getElementById("segundoNumeroMult").value
  );
  const resultado = primeiroNumeroMult * segundoNumeroMult;

  window.alert("A soma dos númmeros inseridos é: " + resultado);
}
