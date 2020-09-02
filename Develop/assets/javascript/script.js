// Add event listener to Start Quiz button
var startQuiz = document.querySelector(".startBtn");
var question = document.querySelector("span");
var answer1 = document.querySelector(".a1");
var answer2 = document.querySelector(".a2");
var answer3 = document.querySelector(".a3");
var answer4 = document.querySelector(".a4");
var checkBox1 = document.getElementById("#flexCheckDefault-1");

startQuiz.addEventListener("click", askQuestion);

var questionArray = [];
var answer1Array = [];
var correctAnswerArray = [];

questionArray = ["(1): Which is a correct IF statement if 'x' is NOT equal to 10?"];

answer1Array = ["if (x <> 10)", "if (x =! 10)", "if (x not= 10)", "if (x != 10)"];

correctAnswerArray = ["if (x != 10)"];

var numQuestions = questionArray.length;

function askQuestion() {
  
  for (var i = 0; i < questionArray.length; i++) {
    question.textContent = questionArray[i];
    answer1.textContent = answer1Array[i];
    answer2.textContent = answer1Array[i + 1];
    answer3.textContent = answer1Array[i + 2];
    answer4.textContent = answer1Array[i + 3];
    
    console.log(question);
    console.log(answer1);
    console.log(checkBox1);
  }
}
  
