function conversor() {
  let valoremreais = prompt("Digite o valor em reais: ");
  let valoreuros = valoremreais * 5.76;
  let valorDolar = valoremreais * 5.25;
  let valorLibra = valoremreais * 6.7;
  let valorYen = valoremreais * 0.037;
  let valorPeso = valoremreais * 0.032;
}

switch ((1, 2, 3, 4, 5)) {
  case 1:
    alert("O valor em euros é: " + valoreuros);
    break;
  case 2:
    alert("O valor em dolares é: " + valorDolar);
    break;
  case 3:
    alert("O valor em libras é: " + valorLibra);
    break;
  case 4:
    alert("O valor em yen é: " + valorYen);
    break;
  case 5:
    alert("O valor em pesos é: " + valorPeso);
    break;
  default:
    alert("Escolha a opção certa , BURROO !");
}
