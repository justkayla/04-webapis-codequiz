
var startButton = document.querySelector("#start");      // Start button
var option1 = document.querySelector("#option1");       // First button
var option2 = document.querySelector("#option2");       // Second button
var option3 = document.querySelector("#option3");       // Third button
var option4 = document.querySelector("#option4");       // Fourth button


// Listen for click events when unique buttons are pressed
startButton.addEventListener("click", function() {
    console.log("start quiz");
})

option1.addEventListener("click", function() {
    console.log("option1");
})

option2.addEventListener("click", function() {
    console.log("option2");
})

option3.addEventListener("click", function() {
    console.log("option3");
})

option4.addEventListener("click", function() {
    console.log("option4");
})
    // If option1 button is pressed AND the answer === true, move forward   
    // Else option1 button is pressed AND the answer === false, move forward AND -5 seconds   


// When the page loads, the User is presented with the quiz title, a description, and the start button
// User clicks on the start button
// When the start button is clicked, a timer is started and the User is presented with a question
// If the User answers the question correctly, they are presented with another question
// If the User answers the question incorrectly, time is subtracted from the timer
// When all questions are answered OR the timer === 0, then the game is over
// When the game is over, the User can save their initials and score


/* Code for quiz timer

If User answers question correctly, no time is subtracted
Else User answers question incorrectly, 5 seconds are subtracted from timer
Total amount of time alloted for quiz is 3 minutes

*/


// Code for the EventListener


// Code for User name and score keeper