function somar() {
  const primeiroNumeroSoma = Number(
    document.getElementById("primeiroNumeroSoma").value
  );
  const segundoNumeroSoma = Number(
    document.getElementById("segundoNumeroSoma").value
  );
  const resultado = primeiroNumeroSoma + segundoNumeroSoma;
  window.alert("Resultado da soma: " + resultado);
}

function sub() {
  const primeiroNumeroSub = Number(
    document.getElementById("primeiroNumeroSub").value
  );
  const segundoNumeroSub = Number(
    document.getElementById("segundoNumeroSub").value
  );
  const resultado = primeiroNumeroSub - segundoNumeroSub;
  window.alert("Resultado da subtração: " + resultado);
}

function mult() {
  const primeiroNumeroMult = Number(
    document.getElementById("primeiroNumeroMult").value
  );
  const segundoNumeroMult = Number(
    document.getElementById("segundoNumeroMult").value
  );
  const resultado = primeiroNumeroMult * segundoNumeroMult;
  window.alert("Resultado da multiplicação: " + resultado);
}

function div() {
  const primeiroNumeroDiv = Number(
    document.getElementById("primeiroNumeroDiv").value
  );
  const segundoNumeroDiv = Number(
    document.getElementById("segundoNumeroDiv").value
  );
  const resultado = primeiroNumeroDiv / segundoNumeroDiv;
  window.alert("Resultado da divisão: " + resultado);
}
