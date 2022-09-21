




var currentScore = 0;
var secondsRemaining = 120;
// var for current index value as we move through the questions? 



// Function for showing a question
function showAQuestion(q){
  var section = document.createElement("section");
  var h2 = document.getElementById("question");
  h2.textContent = q.question;
    console.log(h2);
  
  var ul = document.createElement("ul");
    console.log(ul);
    
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
    answer: [ "A1", "A2", "A3", "A4", ],
    correctAnswer: 1
  // How to identify correct answer?
  },

  { // Index 1
    question: "Why is Barry so amazing?",
    answer: [ "A1", "A2", "A3", "A4", ],
    correctAnswer: 3
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