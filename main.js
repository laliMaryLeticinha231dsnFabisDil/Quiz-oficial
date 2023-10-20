const questions = [
    {
        question: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
        Imagem: "sangue.jpg",
        answers: [
            { text: "Tem entre 2 a 4 litros. São retirados 450 mililitros", correct: false, score: 0 },
            { text: "Tem entre 4 a 6 litros. São retirados 450 mililitros", correct: true, score: 10 },
            { text: "Tem 10 litros. São retirados 2 litros", correct: false, score: 0 },
            { text: "Tem 7 litros. São retirados 1,5 litros", correct: false, score: 0 }
        ]
    },
    {
        question: "De quem é a famosa frase 'Penso, logo existo'?",
       Imagem: "Descartes.jpg",
        answers: [
            { text: "Platão", correct: false, score: 0 },
            { text: "Galileu Galilei", correct: false, score: 0 },
            { text: "Descartes", correct: true, score: 10 },
            { text: "Sócrates", correct: false, score: 0 }
        ]
    },
    {
        question: "De onde é a invenção do chuveiro elétrico?",
        Imagem: "chuveiro.jpg",
        answers: [ 
            { text: "França", correct: false, score: 0 },
            { text: "Inglaterra", correct: false, score: 0 },
            { text: "Brasil", correct: true, score: 10 },
            { text: "Itália", correct: false, score: 0 }
        ]
    },
    {
        question: "Quais o menor e o maior país do mundo?",
        Imagem: "planeta-terra.jpg",
        answers: [
            { text: "Vaticano e Rússia", correct: true, score: 10 },
            { text: "Nauru e China", correct: false, score: 0 },
            { text: "Mônaco e Canadá", correct: false, score: 0 },
            { text: "São Marino e Índia", correct: false, score: 0 }
        ]
    },
    {
        question: "Quantas casas decimais tem o número pi?",
        Imagem: "pi.jpg",
        answers: [
            { text: "Duas", correct: false, score: 0 },
            { text: "Centenas", correct: false, score: 0 },
            { text: "Infinitas", correct: true, score: 10 },
            { text: "Milhares", correct: false, score: 0 }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const MinhaImagem = document.getElementById("MinhaImagem")


let currentQuestionIndex = 0;
let score = 0;
let wrongAttempts = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    MinhaImagem.style.display = "block"
    nextButton.innerHTML = "Avançar";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    MinhaImagem.src = currentQuestion.Imagem;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const questionScore = questions[currentQuestionIndex].answers.find(answer => answer.text === selectedBtn.textContent).score;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    score += questionScore; // Adicione a pontuação da pergunta à pontuação total
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Sua pontuação é de ${score} Pontos!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
    MinhaImagem.style.display = "none"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


