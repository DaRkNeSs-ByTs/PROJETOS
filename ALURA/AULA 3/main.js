function jogar() {
  prompt("digite um número entre 1 e 5");
  var numero = Math.floor(Math.random() * 5) + 1;
  var tentativas = 3;
  var ganhou = false;
  var numeroUsuario = parseInt(prompt("Digite um número entre 1 e 5: "));
  while (tentativas > 0) {
    if (numeroUsuario === numero) {
      ganhou = true;
      break;
    } else {
      tentativas--;
      if (tentativas > 0) {
        numeroUsuario = parseInt(
          prompt(
            "Número errado! Tente novamente. Você ainda tem " +
              tentativas +
              " tentativas."
          )
        );
      }
    }
  }
  if (ganhou) {
    alert("Parabéns! Você acertou o número " + numero + "!");
  } else {
    alert("Você perdeu! O número era " + numero + ".");
  }
  var jogarNovamente = confirm("Deseja jogar novamente?");
  if (jogarNovamente) {
    jogar();
  } else {
    alert("Obrigado por jogar!");
  }
}
