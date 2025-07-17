function converterTemperatura(){
    const temperaturaC = Number (document.getElementById("temperaturaC").value);

    const convertido = (temperaturaC * 9/5) + 32;
    window.alert(parseFloat("Temperatura convertida para Fahrenheit: °F "+convertido));
}