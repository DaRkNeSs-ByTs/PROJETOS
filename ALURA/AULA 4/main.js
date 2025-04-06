let personagem = ["", "", ""];
let viloes = ["Loki", "Thanos", "Thor"];

let forcapersonagem = 0;
let forcaviloes = 0;

alert("Bem-vindo ao jogo de RPG! Escolha os personagens");

for (let i = 0; i < 3; i++) {
  let escolhapersonagem = prompt("Digite o nome do personagem " + (i + 1));
  personagem[i] = escolhapersonagem;
  forcapersonagem += Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 3; i++) {
  let indicealeatorio = Math.floor(Math.random() * 3);
  viloes[i] = viloes[indicealeatorio];
  forcaviloes += Math.floor(Math.random() * 10) + 1;
}

if (forcapersonagem > forcaviloes) {
  alert(
    "Parabéns, você ganhou a batalha com os personagens " +
      personagem.join(", ") +
      " contra os vilões " +
      viloes.join(", ") +
      "!"
  );
} else {
  alert(
    "Que pena, você perdeu a batalha com os personagens " +
      personagem.join(", ") +
      " contra os vilões " +
      viloes.join(", ") +
      "!"
  );
  alert("A força dos personagens é " + forcapersonagem);
}
