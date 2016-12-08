var guessInput = document.getElementById('guess');
var submitBTN = document.getElementById('submit');
var clearBTN = document.getElementById('clear-input');
var lastGuessWas = document.getElementById('lastGuessWas');
var lastGuessNum = document.getElementById('lastGuessNum');
var outcomeText = document.getElementById('outcomeText');
var resetBTN = document.getElementById('reset');
var randomNumber;
resetBTN.disabled = true;
clearBTN.disabled = true;

var newMin = document.getElementById('new-min');
var newMax = document.getElementById('new-max');
var resetNew = document.getElementById('resetNew');
var min = 0;
var max = 100;
resetNew.disabled = true;
// For the second submit button i decided to make.

var submitBTN2 = document.getElementById('submit-2');
submitBTN2.disabled = true;

var guessTWO = document.getElementById('guess-2');

// window on load Generate new number on load and then console.logs it
window.onload = randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// event listener for that submit button. parse makes it an integer.
submitBTN.addEventListener('click', function(){
  var userGuess = parseInt(guessInput.value);
  resetBTN.disabled = false;
  if (guessInput.value === ""){
    return alert("Input an actual number pls.");
  } else if (userGuess < 1 || userGuess > 100) {
    return alert("Input a number between 1 and 100 pls.");
  }

  lastGuessNum.innerText = userGuess;
  console.log(userGuess);
  lastGuessWas.innerText = "Your last guess was:"
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's exactly what I had in mind!";
    return alert("Dassit!");
    console.log("boom!");
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low. Try again.";
    console.log('too low');
  } else {
    outcomeText.innerText = "... and it was too high. Try again.";
    console.log('too high');
  }
});


clearBTN.addEventListener('click', function(){
  guessInput.value = "";
  disableClearBTN();
  console.log("Clear was clicked");
});

// Function helper that clears BTN and clear input
function disableClearBTN() {
  if (guessInput.value === "") {
    clearBTN.disabled = true;
  }
};

function disableResetNew() {
  if (newMax.value === "") {
    resetNew.disabled = true;
  }
};

// FOr using the clever guy submit

submitBTN2.addEventListener('click', function(){
  var userGuess = parseInt(guessTWO.value);
  resetBTN.disabled = false;
  if (guessTWO.value === ""){
    return alert("Input an actual number pls.");
  } else if (userGuess < 1 || userGuess > 100) {
    return alert("Input a number between 1 and 100 pls.");
  }

  lastGuessNum.innerText = userGuess;
  console.log(userGuess);
  lastGuessWas.innerText = "Your last guess was:"
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's exactly what I had in mind!";
    return alert("Dassit!");
    console.log("boom!");
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low. Try again.";
    console.log('too low');
  } else {
    outcomeText.innerText = "... and it was too high. Try again.";
    console.log('too high');
  }
});

resetBTN.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 100 + 1);
  resetBTN.disabled = true;
  guessInput.value = "";
  outcomeText.innerText = "";
  lastGuessWas.innerText = "...";
  lastGuessNum.innerText = "";
  clearBTN.disabled = true;
  console.log(randomNumber);
  newMax.value = "";
  newMin.value = "";
  resetNew.disabled = true;
  submitBTN2.disabled = true
  guessTWO.value = "";

  // Reset game, get new random number, consolelog that shit empty input string, reset all btns.. etc.
});

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

resetNew.addEventListener('click', function(){
  newMax.value = "";
  newMin.value = "";
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  resetNew.disabled = true;
});





// STUFF I COULD ALSO DO...
