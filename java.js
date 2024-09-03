const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
   {
        enunciado: "Quem fundou o budismo?",
        alternativas: ["a) Confúcio","b) Siddhartha Gautama","c) Lao-Tsé"]
    },
    {
        enunciado: "Qual é o objetivo final do budismo?",
        alternativas: ["a) Nirvana","b) Paraíso","c) Reencarnação"]
    },
    {
        enunciado: "Qual é uma das Quatro Nobres Verdades?",
        alternativas: ["a) A vida é eterna","b) A vida é sofrimento","c) A vida é uma ilusão"]
    },
    {
        enunciado: "Qual é o nome do caminho que leva à cessação do sofrimento?",
        alternativas: ["a) Caminho Triplo","b) Caminho Óctuplo","c) Caminho Duplo"]
    },

];

let atual = 0;

let perguntaAtual;
 function mostraPergunta(){
 perguntaAtual = perguntas[atual];

 caixaPergunta.textContent = perguntaAtual.enunciado;

 }

 mostraPergunta();