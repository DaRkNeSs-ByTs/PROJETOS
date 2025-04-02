function conversor() {
  let valoremreais = prompt("Digite o valor em reais: ");
  let valoreuros = valoremreais * 5.76;
  let valorDolar = valoremreais * 5.25;
  let valorLibra = valoremreais * 6.7;
  let valorYen = valoremreais * 0.037;
  let valorPeso = valoremreais * 0.032;

  alert(
    "O valor em euros é: " +
      valoreuros +
      "\nO valor em dólares é: " +
      valorDolar +
      "\nO valor em libras é: " +
      valorLibra +
      "\nO valor em yens é: " +
      valorYen +
      "\nO valor em pesos é: " +
      valorPeso
  );
}
