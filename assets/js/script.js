// DOM Selectors
var startButtonEl = document.querySelector("#start-button");    // Start button to begin the quiz
var timerEl = document.querySelector("#countdown-timer");       // Countdown timer
var scoreEl = document.querySelector("#current-score");         // score counter for correct answers
var totalPointsEl = document.querySelector("#points-counter");

// Global variables
var score = 0;         // When User selects correct answer, +1 to currentScore
var secondsRemaining = 120;   // Time counter
var questionIndex = 0;
var totalPointsCounter = 0;

// Array for Question Objects
var questions = [
  { 
    // Index 0
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [ "<javascript>", "<scripting>", "<script>", "<js>>" ],
    correctAnswer: 2,
  },  
  {
    // Index 1
    question: "JavaScript is a ___-side programming language.",
    answers: [ "Client", "Server", "Both", "None" ],
    correctAnswer: 2,
  },
  {
    // Index 3
    question: "What will this code return: Boolean(3<7)",
    answers: [ "true", "false", "NaN", "SyntaxError" ],
    correctAnswer: 0
  },
  {
    // Index 4
    question: "Commonly used data types DO NOT include:",
    answers: [ "booleans", "alerts", "strings", "numbers" ],
    correctAnswer: 1
  },
  {
    // Index 5
    question: "The condition of an if/else statement is enclosed within ___.",
    answers: [ "quotes", "curly brackets", "parentheses", "square brackets" ],
    correctAnswer: 2
  }
]

// When this function is called,
// The quiz starts,
// The timer start,
// Hide start button to prevent second quiz from populating
function startQuiz() {
  startButtonEl.style.display = "none";   // hides start
  startTimer();
  displayQuestion();  
}

// Iterate through question object array,
// Sequentially select question objects,
// Access content in question objects,
// Display each question object
function displayQuestion() {
  var currentQuestionObj = questions[questionIndex];
  var section = document.querySelector(".question-container");
  if (!currentQuestionObj) {
    section.innerHTML=""
    clearInterval(timer);
    logScore()
    displayScore()
    return
  }  
  section.innerHTML=""

  var question = document.createElement("h2");  
  question.textContent = currentQuestionObj.question; // Give it the text of the question
  section.appendChild(question);
  
  var answerList = document.createElement("section"); 
    
  // Loop for corresponding answers to populate w/question
  for( var i = 0; i < currentQuestionObj.answers.length; i++) {
    var currAnswerArr = currentQuestionObj.answers[i];
    var answerListEl = document.createElement("button");
    answerListEl.textContent = currAnswerArr;
    answerListEl.addEventListener("click", checkAnswer)
    answerList.appendChild(answerListEl);
  }     
    section.appendChild(answerList); // adds ul to the section element
    document.body.appendChild(section); // adds <section> tag
}

// Check if user answer is correct,
// If user answer is correct, +1 to score,
// If user answer is incorrect, -10 from timer,
// After user answer (correct or incorrect), display next question 
function checkAnswer(event) {
  var userAnswer = event.target.innerText
  var correctAnswer = questions[questionIndex].answers[questions[questionIndex].correctAnswer]
  if (userAnswer === correctAnswer) {
    score++; 
    // Update score value
    scoreEl.textContent = String(`Score: ${score}`);    // Preserves "Score" text from scoreEl
  } else {
    secondsRemaining = secondsRemaining - 10;
  }
  questionIndex++;
  displayQuestion()
}

// Create input field for user initials upon completion of quiz,
// Connect input field to local storage,
// Push initials and score object values to local storage,
// Array allows for multiple scores for same initals,
// Display initials and score values as strings in storage
function logScore(){
  var initialsContainerEl = document.querySelector(".initials-container");
  initialsContainerEl.style.display = "block";
  var submitButtonEl = document.querySelector(".initials-submit");
  submitButtonEl.addEventListener("click", function(){
    var initials = document.querySelector(".initials-input").value;
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({initials:initials, score:score});
    localStorage.setItem("scores", JSON.stringify(scores));
  })
}


// Retrieve scores from local storage
// Debug: 
    // How to recall local storage string,
    // How to display recalled string on screen,
      // Button to reveal stored scores?
      // Separate <section> to populate stored scores separately?
function displayScore(){
  // Get stored value from local storage, if it exists
  var totalPointsCounter = document.querySelector("#points-counter");
  scores = localStorage.setItem("scores");
  // If stored value doesn't exist, set counter to 0
  if (scores === null ) {
    totalPointsCounter = 0;
  } else {
    // If a value is retrieved from client storage, set the score to that value
    totalPointsCounter = scores;
  }
  // Render win count to page
  totalPointsCounter.textContent = scores;
}

// Create timer that counts down from 120 seconds
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
      secondsRemaining-- ;
      // Tests if time has run out
      if(secondsRemaining === 0 || secondsRemaining < 0) {
          // Clears interval
          clearInterval(timer);
          secondsRemaining = 0;
      }
      timerEl.textContent = secondsRemaining;
  }, 1000);  
}


// When startButtonEl is clicked, start quiz
startButtonEl.addEventListener("click", startQuiz)