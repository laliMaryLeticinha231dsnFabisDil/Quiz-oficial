const questoes = [
    {
        questao: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
        botao: [
            { text: "Tem entre 2 a 4 litros. São retirados 450 mililitros", correct: false },
            { text: "Tem entre 4 a 6 litros. São retirados 450 mililitros", correct: true },
            { text: "Tem 10 litros. São retirados 2 litros", correct: false },
            { text: "Tem 7 litros. São retirados 1,5 litros", correct: false }
        ]
    },
    {
        questao: "De quem é a famosa frase 'Penso, logo existo'?",
        botao: [
            { text: "Platão", correct: false },
            { text: "Galileu Galilei", correct: false },
            { text: "Descartes", correct: true },
            { text: "Sócrates", correct: false }
        ]
    },
    {
        questao: "De onde é a invenção do chuveiro elétrico?",
        botao: [
            { text: "França", correct: false },
            { text: "Inglaterra", correct: false },
            { text: "Brasil", correct: true },
            { text: "Itália", correct: false },
            { text: "Austrália", correct: true }
        ]
    },
    {
        questao: "Quais o menor e o maior país do mundo?",
        botao: [
            { text: "Vaticano e Rússia", correct: true },
            { text: "Nauru e China", correct: false },
            { text: "Mônaco e Canadá", correct: false },
            { text: "São Marino e Índia", correct: true }
        ]
    },
    {
        questao: "Quantas casas decimais tem o número pi?",
        botao: [
            { text: "Duas", correct: false },
            { text: "Centenas", correct: false },
            { text: "Infinitas", correct: true },
            { text: "Milhares", correct: true }
        ]
    }
];

const questaoElement = document.getElementById("questao");
const botaoElement = document.getElementById("botao");
const botaoAvancarElement = document.getElementById("botao-avancar");


let perguntaAtualIndex = 0;
let score = 0;

function ComecarQuiz(){
    perguntaAtualIndex = 0;
    score = 0;
    botaoAvancarElement.innerHTML = "next"
    showQuestion();
}

function showQuestion(){
    let perguntaAtual = questao [perguntaAtualIndex];
    let questaoNo 
}