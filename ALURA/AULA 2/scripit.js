function jogar() {
  idade = prompt("Qual a sua idade?");
  if (idade < 18) {
    alert("Você não pode jogar!");
    return;
  }
  if (idade >= 18) {
    alert("Que Começe os Jogos!");
  }
  {
    let pedra = 1;
    let papel = 2;
    let tesoura = 3;
    let jogador = prompt("Escolha: Pedra(1), Papel(2) ou Tesoura(3)");
    let computador = Math.floor(Math.random() * 3) + 1;
    if (jogador == pedra && computador == papel) {
      alert("Computador escolheu Papel, você perdeu!");
    } else if (jogador == pedra && computador == tesoura) {
      alert("Computador escolheu Tesoura, você ganhou!");
    } else if (jogador == papel && computador == pedra) {
      alert("Computador escolheu Pedra, você ganhou!");
    } else if (jogador == papel && computador == tesoura) {
      alert("Computador escolheu Tesoura, você perdeu!");
    } else if (jogador == tesoura && computador == pedra) {
      alert("Computador escolheu Pedra, você perdeu!");
    } else if (jogador == tesoura && computador == papel) {
      alert("Computador escolheu Papel, você ganhou!");
    } else if (jogador == computador) {
      alert("Empate!");
    } else {
      alert("Escolha inválida! Tente novamente.");
    }
  }
}
