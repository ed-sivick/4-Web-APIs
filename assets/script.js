// Add event listener to Start Quiz button
var startQuizBtn = document.querySelector(".startBtn");
var questionView = document.querySelector(".question");
var answer1 = document.querySelector(".a1");
var answer2 = document.querySelector(".a2");
var answer3 = document.querySelector(".a3");
var answer4 = document.querySelector(".a4");
var button1 = document.querySelector(".ans1");
var button2 = document.querySelector(".ans2");
var button3 = document.querySelector(".ans3");
var button4 = document.querySelector(".ans4");
var userAnswer = 0;
var userScore = 0;
var questionNum = 0;
var correctAnswer = 0;

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
  askQuestion(questions[questionNum])
}

var questions = [{
  question: "(1): Which is a correct IF statement if 'x' is NOT equal to 10?",
  choices: ["if (x <> 10)", "if (x =! 10)", "if (x not= 10)", "if (x != 10)"],
  answer: 4,
},
{
  question: "(2): Which operator is used to assign a value to a variable?",
  choices: [";", "=", "-", ","],
  answer: 2,
},
{
  question: "(3): How do you declare a JavaScript variable?",
  choices: ["var myName;", "variable myName;", "call myName", "var = myName"],
  answer: 1,
},
{
  question: "(4): Which determines the highest value number between x and y?",
  choices: ["Math.ceil(x, y)", "Math.max(x, y)", "math.top(x, y)", "max(x, y)"],
  answer: 2,
},
{
  question: "(5): How do you round the number 5.25, to the nearest integer?",
  choices: ["Math.round(5.25)", "rnd(5.25)", "round(5.25)", "floor(5.25)"],
  answer: 1,
},
]

function askQuestion(question) {
  button1.clicked = false;
  button2.clicked = false;
  button3.clicked = false;
  button4.clicked = false;
  console.log("button1 is " + button1)
  if (questionNum > 4) {
    prompt("Game Is Over.  Your Score is " + userScore + " out of 5.\nType your initials below to save your Score.");
    location.reload();
  }

  questionView.textContent = question.question;
  answer1.textContent = question.choices[0];
  answer2.textContent = question.choices[1];
  answer3.textContent = question.choices[2];
  answer4.textContent = question.choices[3];
  correctAnswer = question.answer;
  console.log("Correct Answer is " + correctAnswer);
}

button1.addEventListener("click", function () {
  if (button1.click === true) {
    userAnswer = 1;
    console.log(userAnswer);
  }
  quizAnswer();
});

button2.addEventListener("click", function () {
  if (button2.click === true) {
    userAnswer = 2;
    console.log(userAnswer);
  }
  quizAnswer();
});

button3.addEventListener("click", function () {
  if (button3.click === true) {
    userAnswer = 3;
    console.log(userAnswer);
  }
  quizAnswer();
});

button4.addEventListener("click", function () {
  if (button4.click === true) {
    userAnswer = 4;
    console.log(userAnswer);
  }
  quizAnswer();
});

function quizAnswer() {
  if (userAnswer === correctAnswer) {
    userScore++;
    questionNum++;
    console.log(userScore);
    console.log(questionNum);
  } else {
    questionNum++
    // Also deduct 5 seconds from timer
  }
  askQuestion(questions[questionNum])
};
