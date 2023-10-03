const result = document.querySelector("#result");

document.querySelector("#adicionar").addEventListener("click", adicao);
document.querySelector("#subtrair").addEventListener("click", subtracao);
document.querySelector("#multiplicar").addEventListener("click", multiplicacao);
document.querySelector("#divisao").addEventListener("click", divisao);

function adicao() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  if (num1 === "" || num2 === "") {
    alert("Preencha todos os campos.");
    return;
  }

  let soma = Number(num1) + Number(num2);
  result.textContent = `Resultado: ${soma}`;
}

function subtrair() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  if (num1 === "" || num2 === "") {
    alert("Preencha todos os campos.");
    return;
  }

  let subtracao = Number(num1) - Number(num2);
  result.textContent = `Resultado: ${subtracao}`;
}

function multiplicar() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  if (num1 === "" || num2 === "") {
    alert("Preencha todos os campos.");
    return;
  }

  let multiplicacao = Number(num1) * Number(num2);
  result.textContent = `Resultado: ${multiplicacao}`;
}

function divisao() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;

  if (num1 === "" || num2 === "") {
    alert("Preencha todos os campos.");
  } else if (Number(num2) === 0) {
    result.textContent = "Não é possível dividir por zero.";
  } else {
    let divisao = Number(num1) / Number(num2);
    result.textContent = `Resultado: ${parseFloat(divisao.toFixed(2))}`;
  }
}
function limpar() {
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
  result.textContent = "Calculando...";
}
