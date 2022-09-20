

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
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

// Timer that counts down from 120
function countdown() {
  var timeLeft = 120;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();         // questions, but outside of timer (take out)
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }
  
  countdown();

var startButton = document.querySelector("#start");           // Start button
startButton.addEventListener("click", function() {
    console.log("start quiz");
})

function startQuiz() {    
    document.getElementById("count").style="color:green;";
    startTimer();
};

startButton.addEventListener("click", function() {
    console.log("start quiz");
});

//function that will display current question and global var the current question [0], [1]
//function display question runs simultaneously with timer


/* 
If User answers question correctly, no time is subtracted
Else User answers question incorrectly, 5 seconds are subtracted from timer
Total amount of time alloted for quiz is 3 minutes
*/


// Code for the EventListener


// Code for User name and score keeper