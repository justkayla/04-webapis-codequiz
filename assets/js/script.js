// DOM Selectors
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#countdown-timer");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var currentScore = document.querySelector("#current-score");

// Global variables

var currentScore = 0;         // When User selects correct answer, +1 to currentScore
var secondsRemaining = 120;   // Time counts down naturally AND when User selects wrong answer, -10 seconds to secondsRemaining

// Array for Question Objects
var questions = [
  { 
    // Index 0
    question: "How is Barry so cute?",
    answers: [ "He's amazing", "He's the best", "He's purrfect", "He's outta this world" ],
    correctAnswer: 2,
  },
  
  {
    // Index 1
    question: "Why is Barry so smelly?",
    answers: [ "He's rolling around outside", "He was born this way", "He never takes a bath", "He's just a stinky boi" ],
    correctAnswer: 3,
  },

  {
    // Index 3
    question: "Will I ever understand coding?",
    answers: [ "For sure!", "Absolutely!", "You got this!", "You're doing great!" ],
    correctAnswer: 0
  }

]

// Loop to iterate over Question Objects in Array
// Elements are created for each Question Object as Array iterates
// Relavent content from each Question Object is applied to corresponding Element
// Elements are added to the DOM
// Should this process be wrapped in a function to call on-demand?

for( var i = 0; i < questions.length; i ++){
  var currentQuestionObj = questions[i]     // Identifying which question is selected through iteration
  
  var questionContainer = document.createElement("section");
  // <section> tag contains question and answer content
  document.body.appendChild(questionContainer);
  
  var question = document.createElement("h2");
  // Give it the text of the question
  question.textContent = currentQuestionObj[" "];    // TODO: How to pass text content from question string based on loop?
  console.log(question);
  document.body.appendChild(question);    // TODO: Data versus presentation: Need to appendChild inside <section> questionContainer </section>?
  
    var answerContainer = document.createElement("ul");
  // <ul> tag contains <li> answer tags
  document.body.appendChild(answerContainer);   // TODO: Data vs presentation: Need to appendChild inside <section> questionContainer </section>?
   
  var answer0 = document.createElement("li");
  // Give it the text of the [0] answer
  answer0.textContent = currentQuestionObj.answers[0];    // TODO: Why doesn't this select the content from answer[0]?
  console.log(answer0);
  document.body.appendChild(answer0);    // TODO: Data vs presentation: Need to appendChild inside <ul> answerContainer </ul>?

  var answer1 = document.createElement("li");
  // Give it the text of the [1] answer
  document.body.appendChild(answer1);     // TODO: Data vs presentation: Need to appendChild inside <ul> answerContainer </ul>?
  
  var answer2 = document.createElement("li");
  // Give it the text of the [2] answer
  
  var answer3 = document.createElement("li");
  // Give it the text of the [3] answer;
  document.body.appendChild(answer3);     // TODO: Data vs presentation: Need to appendChild inside <ul> answerContainer </ul>?

  
  // Create <h2> tag, give it the text of the question
  // Create <ul> tag
  // Create <li> tag for each answer, give it the text of the answers
  // Add all this stuff to the DOM
}


// TODO: startQuiz function (which included startTimer)
// TODO: startTimer function (called with startQuiz)
// TODO: Event listener for start button / startQuiz function
// TODO: correctAnswer function: adds point to score counter
// TODO: incorrectAnswer function: subtracts 10 seconds from timer






/*
  <section>
    <h2>Question 1</h2>
    <ul>
      <li>Answer 1</li>
      <li>Answer 2</li>
      <li>Answer 3</li>
      <li>Answer 4</li>
    </ul>
  </section>

  

 









/*
// DOM selectors

// Global variables

// Array of question objects

// When page first loads (init()), user is presented with landing screen
    // Title of quiz
    // Instructions
    // Start Button

// When user clicks the start button,
    // Correct answer counter (top of page)
    // Incorrect answer counter (top of page)
    // Timer (top of page)
    // A question is displayed
    // The timer starts

// When user chooses an answer,
    // If answer is correct, a point is added to correctCounter
    // If answer is false, a point is added to incorrectCounter
    // If answer is false, 10 seconds are deducted from the timer
    // Score === correctCounter




    // DOM Selectors
    var startButton = document.querySelector(".start-button");
    var resetButton = document.querySelector(".reset-button");
    var timer = document.querySelector(".countdown-timer");
    var questions = document.querySelector(".questions");
    var options = document.querySelector(".option");
    var correctAnswer = document.querySelector(".correct");
    var incorrectAnswer = document.querySelector(".incorrect");
    
    
    // Global Variables
    var correctCounter = 0;
    var incorrectCounter = 0;
    var answeredQuestion = false;
    var timer;
    var secondsRemaining = 120;
    var currentQuestion = []; // TODO: Push randomly generated question from object array into currectQuestion array for display purposes?
    // var for current index value as we move through the questions? 
    
    
    // Array for all question objects
    var questions = [
      { // Index 0
        question: "How is Barry so cute?",
        option: [ "1", "2", "3", "4" ],
        correctAnswer: "1"    // TODO: How to identify correct answer?  
      },
    
      { // Index 1
        question: "Why is Barry so amazing?",
        option: [ "1", "2", "3", "4" ],
        correctAnswer: "3"      // TODO: How to identify correct answer?    
      },
    
    ]
    
    
    // init() is called when the page loads, retrieves stored scores
    function init() {
      getCorrects();
      getIncorrects();
    }
    
    
    // startQuiz() is called when the start button is clicked
    function startQuiz() {  
      answeredQuestion = false;
      secondsRemaining = 120
      
      displayQuestion();    // TODO: Need question to display
      startTimer();   // TODO: Need timer to start
    }
    
    
    // answerQuestionCorrect() is called when a question is answered correctly
    function answerQuestionCorrect() {
      // Add point to correct counter
      correctCounter++
      // Disable start button during game
      startButton.disabled = true;
      // show next question?
      setCorrects()
    }
    
    
    // answerQuestionIncorrect() is called when a question is answered incorrectly
    function answerQuestionIncorrect() {
      // Add point to incorrect counter
      correctCounter--
      // Disable start button during game
      startButton.disabled = true;
      // stay on incorrect question?
      setIncorrects()
    }
    
    
    // startTimer() starts and stops the timer and triggers finishQuiz()
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
          timer.textContent = secondsRemaining;
      }, 1000);
    }
    
    
    // Displays question
    function displayQuestion() {
      // TODO: Randomly picks question from object array
      randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      currentQuestion = []  
      // Loop to push question into currentQuestion array
      for(var i = 0; i < questions.length; i++) {
        currentQuestion.push(questions);
      }
    
    }
    
    
    // Updates correct answer count on screen and stores count
    function setCorrects() {
      correctAnswer.textContent = correctCounter;
      localStorage.setItem("correctCount", correctCounter);
    }
    
    // Updates incorrect answer count on screen and stores count
    function setIncorrects() {
      incorrectAnswer.textContent = incorrectCounter;
      localStorage.setItem("incorrectCount", incorrectCounter);
    }
    
    // Functions used by init()
    function getCorrects() {
      // Get stored value from storage, if it exists
      var storedCorrects = localStorage.getItem("correctCount");
      // If stored value doesn't exist, set counter to 0
      if (storedCorrects === null) {
        correctCounter = 0;
      } else {
        // If a value is retrieved from client storage set correctCounter accordingly
        correctCounter = storedCorrects;
      }
      correctAnswer.textContent = correctCounter;
    }
    
    function getIncorrects() {
      var storedIncorrects = localStorage.getItem("incorrectCount");
      if (storedIncorrects === null) {
        incorrectCounter = 0;
      } else {
        incorrectCounter = storedIncorrects;
      }
      incorrectAnswer.textContent = incorrectCounter;
    }
    
    // Event listeners
      // Start button
    startButton.addEventListener("click", startQuiz);
    // TODO: Why doesn't quiz start?
    
    // Call init() when page is opened
    init();
    
    // Reset button
    function resetQuiz() {
      // Reset counters
      correctCounter = 0;
      incorrectCounter = 0;
      // Renders correct/incorrect counts and sets to storage
      setCorrects()
      setIncorrects()
    }
    //Event listener
    resetButton.addEventListener("click", resetQuiz);
*/


