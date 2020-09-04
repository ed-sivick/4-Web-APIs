// Add event listener to Start Quiz button
var startQuizBtn = document.querySelector(".startBtn");
var questionView = document.querySelector("span");
var answer1 = document.querySelector(".a1");
var answer2 = document.querySelector(".a2");
var answer3 = document.querySelector(".a3");
var answer4 = document.querySelector(".a4");
var checkBox1 = document.getElementById("flexCheckDefault-1");
var checkBox2 = document.getElementById("flexCheckDefault-2");
var checkBox3 = document.getElementById("flexCheckDefault-3");
var checkBox4 = document.getElementById("flexCheckDefault-4");
var stateOfBox4 = checkBox4.checked;
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
  checkBox1.checked = false;
  checkBox2.checked = false;
  checkBox3.checked = false;
  checkBox4.checked = false;
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

checkBox1.addEventListener("change", function () {
  console.log(userAnswer);
  if (this.checked) {
    userAnswer = 1;
  }
  quizAnswer();
});

checkBox2.addEventListener("change", function () {
  if (this.checked) {
    userAnswer = 2;
  }
  quizAnswer();
});

checkBox3.addEventListener("change", function () {
  if (this.checked) {
    userAnswer = 3;
  }
  quizAnswer();
});

checkBox4.addEventListener("change", function () {
  if (this.checked) {
    userAnswer = 4;
  }
  quizAnswer();
});

function quizAnswer() {

  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }
  sleep(1000);

  if (userAnswer === correctAnswer) {
    userScore++;
    questionNum++;
  } else {
    questionNum++
    // Also deduct 5 seconds from timer
  }
  askQuestion(questions[questionNum])
};





// function sleep(delay) {
//   var start = new Date().getTime();
//   while (new Date().getTime() < start + delay);
// }
// sleep(1000);