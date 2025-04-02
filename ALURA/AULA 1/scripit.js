function conversor() {
  let valoremreais = prompt("Digite o valor em reais: ");

  valoremreais = parseFloat(valoremreais);
  if (isNaN(valoremreais) || valoremreais < 0) {
    alert("Por favor, digite um valor numérico válido!");
    return;
  }

  let valoreuros = (valoremreais * 5.76).toFixed(2);
  let valorDolar = (valoremreais * 5.25).toFixed(2);
  let valorLibra = (valoremreais * 6.7).toFixed(2);
  let valorYen = (valoremreais * 0.037).toFixed(2);
  let valorPeso = (valoremreais * 0.032).toFixed(2);

  alert(
    "O valor em euros é: €" +
      valoreuros +
      "\nO valor em dólares é: $" +
      valorDolar +
      "\nO valor em libras é: £" +
      valorLibra +
      "\nO valor em yens é: ¥" +
      valorYen +
      "\nO valor em pesos é: $" +
      valorPeso
  );
}
