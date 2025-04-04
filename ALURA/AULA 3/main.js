function jogar() {
  var numero = Math.floor(Math.random() * 10) + 1;
  var tentativas = 0;
  var maxTentativas = 5;

  while (tentativas < maxTentativas) {
    var palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

    if (palpite === numero) {
      alert(
        "Parabéns! Você adivinhou o número em " +
          (tentativas + 1) +
          " tentativas."
      );
      break;
    } else if (palpite < numero) {
      alert("Muito baixo! Tente novamente.");
    } else {
      alert("Muito alto! Tente novamente.");
    }

    tentativas++;

    if (tentativas === maxTentativas) {
      alert(
        "Você não conseguiu adivinhar o número. O número era " + numero + "."
      );
    }
  }
}
