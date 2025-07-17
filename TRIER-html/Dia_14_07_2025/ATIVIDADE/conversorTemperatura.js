/*function converterTemperaturaC(){
    const temperaturaC = Number (document.getElementById("temperaturaC").value);

    const convertidoC = (temperaturaC * 9/5) + 32;
    window.alert(parseFloat("Temperatura convertida para Fahrenheit: °F "+convertidoC));
}
function converterTemperaturaF(){
    const temperaturaF = Number(document.getElementById("temperaturaF").value);

    const convertidoF = (temperaturaF-32)/1.8;
     window.alert(parseFloat("Temperatura convertida para Fahrenheit: °F "+convertidoF));
}*/
function selecionarUnidade() {
  const select = document.getElementById("UnidadeTemperatura");
  const input = document.getElementById("inputTemperatura");
  const unidadeEscolhida = select.valeu;

  if (unidadeEscolhida.equal("celsius")) {
    const Celsius = (input * 9) / 5 + 32;

    window.alert(
      parseFloat("Temperatura convertida para Fahrenheit: °F " + Celsius)
    );
  }
  if (unidadeEscolhida == "fahrenheit") {
    const Fahrenheit = (input - 32) / 1.8;

    window.alert(
      parseFloat("Temperatura convertida para Fahrenheit: °F " + Fahrenheit)
    );
  }
}
