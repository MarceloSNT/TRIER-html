localStorage.setItem("nome","Marcelo");

const nomeGuardado = localStorage.getItem("nome");
console.log(nomeGuardado);

localStorage,removeItem("nome");
const nomeRemovido = localStorage.removeItem("nome");
console.log(nomeRemovido);

localStorage.clear();
const nomeLimpo = localStorage.getItem("nome");
console.log(nomeLimpo);