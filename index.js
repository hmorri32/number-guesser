var guessInput = document.getElementById('guess');
var submitBTN = document.getElementById('submit');
var clearBTN = document.getElementById('clear-input');
var lastGuessWas = document.getElementById('last-guess-was');
var lastGuessNum = document.getElementById('last-guess-num');
var outcomeText = document.getElementById('outcome-text');
var resetBTN = document.getElementById('reset');
var newMin = document.getElementById('new-min');
var newMax = document.getElementById('new-max');
var resetNew = document.getElementById('reset-new');
var min = 0;
var max = 100;
var randomNumber;
// fires up random number on page load
window.onload = randomNumber = Math.floor(Math.random() * 100 + 1);
//
console.log(randomNumber);
var userGuess = parseInt(guessInput.value);
resetNew.disabled = true;
resetBTN.disabled = true;
clearBTN.disabled = true;


submitBTN.addEventListener('click', function(){
  var userGuess = parseInt(guessInput.value);
  resetBTN.disabled = false;
  alertHelper();
  lastGuessNum.innerText = userGuess;
  lastGuessWas.innerText = "Your last guess was:"
  userGuessHelper();
});
// Helper Functions for Submit Button
function alertHelper() {
  lastGuessNum.innerText = userGuess;
  if (guessInput.value === ""){
    alert("Input an actual number pls.");
  } else if (userGuess < 1 || userGuess > 100) {
    alert("Input a number between 1 and 100 pls.");
  }
};

function userGuessHelper() {
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's exactly what I had in mind!";
    alert("dassit!");
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low. try again.";
  } else {
    outcomeText.innerText = "... and it was too high. Try again.";
  }
};

// disable clearBTN
clearBTN.addEventListener('click', function(){
  guessInput.value = "";
  disableClearBTN();
});

// Function helper that clears BTN and clear input
function disableClearBTN() {
  if (guessInput.value === "") {
    clearBTN.disabled = true;
  }
};

resetBTN.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 100 + 1);
  disableButtons();
  resetInputFieldValue();
  resetGuessText();
  console.log(randomNumber);
});
// reset helper functions
function resetGuessText (){
  outcomeText.innerText = "";
  lastGuessWas.innerText = "";
  lastGuessNum.innerText = "";
}

function resetInputFieldValue (){
  guessInput.value = "";
  newMax.value = "";
  newMin.value = "";
};

function disableButtons (){
  resetBTN.disabled = true;
  clearBTN.disabled = true;
  resetNew.disabled = true;
};

// CHANGE RANGE
function changeRange (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

newMin.addEventListener('keyup', function() {
  min = parseInt(newMin.value);
  randomNumber = changeRange(min, max);
  console.log(randomNumber);
});

newMax.addEventListener('keyup', function() {
  max = parseInt(newMax.value);
  randomNumber = changeRange(min, max);
  console.log(randomNumber);
});

// reset new parameters
resetNew.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  clearOwnRangeSection();
  resetNew.disabled = true;
});

function clearOwnRangeSection (){
  newMax.value = "";
  newMin.value = "";
}
