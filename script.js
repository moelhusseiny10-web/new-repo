const questions = [

    {
        question: "What does HTML stand for?",

        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Main Language",
            "Hyper Tool Markup Language"
        ],

        correct: 0
    },

    {
        question: "Which language is used for styling?",

        answers: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],

        correct: 1
    },

    {
        question: "Which language adds interactivity?",

        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop"
        ],

        correct: 2
    }

];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

showQuestion();

function showQuestion() {

    nextBtn.style.display = "none";

    answers.innerHTML = "";

    question.innerHTML = questions[currentQuestion].question;

    questions[currentQuestion].answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.innerHTML = answer;

        button.classList.add("answer");

        button.onclick = () => checkAnswer(index);

        answers.appendChild(button);

    });

}

function checkAnswer(index) {

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(btn => btn.disabled = true);

    if (index === questions[currentQuestion].correct) {

        buttons[index].classList.add("correct");

        score++;

    } else {

        buttons[index].classList.add("wrong");

        buttons[questions[currentQuestion].correct].classList.add("correct");

    }

    nextBtn.style.display = "block";

}

nextBtn.onclick = function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        container.innerHTML = `
<h1>Finished</h1>
<h2>Your Score : ${score} / ${questions.length}</h2>
<button onclick="location.reload()">Restart</button> `

            ;
    }

}