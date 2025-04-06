const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      { opcao: "São Paulo", correto: false },
      { opcao: "Rio de Janeiro", correto: false },
      { opcao: "Brasília", correto: true },
    ],
  },
  {
    pergunta: "Qual é a cor do céu?",
    respostas: [
      { opcao: "Azul", correto: true },
      { opcao: "Verde", correto: false },
      { opcao: "Amarelo", correto: false },
    ],
  },
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;

  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };

    respostasElemento.appendChild(botao);
  }
}

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
