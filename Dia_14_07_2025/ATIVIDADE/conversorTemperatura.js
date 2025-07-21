function converterTemperatura() {
  const inputValor = parseFloat(document.getElementById("valueInput").value);
  const selectValor = document.getElementById("valueSelect").value;
  if (selectValor === "" || NaN) {
    window.alert(
      "!!! Valor inválido !!! \nSelecione uma unidade e digite uma temperatura"
    );
  } else if (selectValor === "celsiusToFahrenheit") {
    const resultadoC = (inputValor * 9) / 5 + 32;
    window.alert("Convertido de Celsius para °F " + resultadoC);
  } else if (selectValor === "fahrenheitToCelsius") {
    const resultadoF = (inputValor - 32) / 1.8;
    window.alert("Convertido de Fahrenheit para °C " + resultadoF);
  }
}
