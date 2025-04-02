idade = prompt("Qual a sua idade?");
if (idade < 18) {
  alert("Você é menor de idade.");
}

if (idade >= 18) {
  escolhajogador = prompt("Digite 1pedra, 2papel ou 3tesoura?");
  escolhacomputador = Math.floor(Math.random() * 3) + 1;
  if (escolhacomputador == escolhajogador) {
    alert("Empate!");
  }

  alert("Computador escolheu: " + escolhacomputador);
}
