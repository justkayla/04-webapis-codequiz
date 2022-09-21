// DOM Selectors
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".countdown-timer");
var currentScore = document.querySelector(".current-score");
var nextQuestionButton = document.querySelector(".next-question");

// Global Variables
var score = 0;
var isFinished = false;
var timer;
var secondsRemaining;
// var for current index value as we move through the questions? 


// init() is called when the page loads
function init() {
  // Add code
}

// startQuiz() is called when the start button is clicked
function startQuiz() {
  secondsRemaining = 120
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  (startTimer)
}

// finishQuiz() is called when the quiz is finished
function finishQuiz() {
  
}

// startTimer() starts and stops the timer and triggers finishQuiz()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
      secondsRemaining-- ;
      timerElement.textContent = secondsRemaining;
      if(secondsReminaing >= 0) {
        // Tests if finish condition is met
        if (isFinished && secondsRemaining > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          finishQuiz();   // Need a finishQuiz function
        }
      }
      if(secondsRemaining === 0 || secondsRemaining < 0) {
          clearInterval(timerInterval);
          secondsRemaining = 0;
      }
      timer.textContent = secondsRemaining;
  }, 1000);
}


// Function for showing a question
function showAQuestion(q){
  var section = document.createElement("section");
  var h2 = document.querySelector(".question");
  h2.textContent = q.question;
    console.log(h2); 
    
  var li = document.querySelectorAll(".answer");
  li.forEach(function(element, index) {
    element.textContent = q.answer[index];
  });
  





  
  

}
// Call the function
showAQuestion(question);
  
  // Figure out which item to get from the array whenever the function is called
  var currentQuestionObj = questions.find(questions[0]);
  // var currQuestionObj = questions[i];
  var section = document.createElement("section");
    console.log(section);
  var h2 = document.createElement("h2");
    console.log(h2);
  var ul = document.createElement("ul");
    console.log(ul);
  var li = document.createElement("li");
    console.log(li);
// When the User clicks "Start":
  // Timer starts
  // Display first question
    // showAQuestion()

// When a question is displayed:
  // User must select answer
  // User must click "next"
  // 
    


// Array for all question objects
var questions = [
  { // Index 0
    question: "How is Barry so cute?",
    answer: [ "1", "2", "3", "4", ],
    correctAnswer: "1"
  // How to identify correct answer?
  },

  { // Index 1
    question: "Why is Barry so amazing?",
    answer: [ "1", "2", "3", "4", ],
    correctAnswer: "3"
  // How to identify correct answer?
  },

]

// Loop through the array of question objects
// for( var i = 0; i < questions.length; i ++){
//   var currQuestionObj = questions[i]
//   var section = document.createElement("section");
//     console.log(section);
//   var h2 = document.createElement("h2");
//     console.log(h2);
//   var ul = document.createElement("ul");
//     console.log(ul);
//   var li = document.createElement("li");
//     console.log(li);
//   //add everything to the DOM
// }



// When the page loads, the User is presented with the quiz title, a description, and the start button
// User clicks on the start button
// Listen for click events when unique buttons are pressed


    // If option1 button is pressed AND the answer === true, move forward   
    // Else option1 button is pressed AND the answer === false, move forward AND -5 seconds   




// When the start button is clicked, a timer is started and the User is presented with a question (display message)
// If the User answers the question correctly, they are presented with another question
// If the User answers the question incorrectly, time is subtracted from the timer
// When all questions are answered OR the timer === 0, then the game is over
// When the game is over, the User can save their initials and score



// Code for quiz timer


// Timer that counts down from 120

// Displays the message one word at a time


//function that will display current question and global var the current question [0], [1]
//function display question runs simultaneously with timer


/* 
If User answers question correctly, no time is subtracted
Else User answers question incorrectly, 5 seconds are subtracted from timer
Total amount of time alloted for quiz is 3 minutes
*/


// Code for the EventListener
  // Clicking "start" button
  // When they choose a question



// Code for User name and score keeper