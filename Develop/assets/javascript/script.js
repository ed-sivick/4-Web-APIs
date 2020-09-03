// Add event listener to Start Quiz button
var startQuiz = document.querySelector(".startBtn");
var questionView = document.querySelector("span");
var answer1View = document.querySelector(".a1");
var answer2View = document.querySelector(".a2");
var answer3View = document.querySelector(".a3");
var answer4View = document.querySelector(".a4");
var checkBox1 = document.getElementById("flexCheckDefault-1");
var checkBox2 = document.getElementById("flexCheckDefault-2");
var checkBox3 = document.getElementById("flexCheckDefault-3");
var checkBox4 = document.getElementById("flexCheckDefault-4");
// Find out if checkBox1 is checked
var stateOfBox1 = checkBox1.checked;

startQuiz.addEventListener("click", startQuiz);

function startQuiz() {
  askQuestion()
}

var questions = [{
  question: "(1): Which is a correct IF statement if 'x' is NOT equal to 10?",
  choices: ["if (x <> 10)", "if (x =! 10)", "if (x not= 10)", "if (x != 10)",],
  answer: 4,
}]

function askQuestion(question) {

  questionView.textContent = question.question;
  answer1View.textContent = question.choices[0];
  answer2View.textContent = question.choices[1];
  answer3View.textContent = question.choices[2];
  answer4View.textContent = question.choices[3];

  console.log(questionView);
  console.log(answer1View);
  console.log(answer2View);
  console.log(answer3View);
  console.log(answer4View);
  console.log(stateOfBox1);
}