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

// window on load Generate new number on load and then console.logs it
window.onload = randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// event listener for that submit button. parse makes it an integer.
submitBTN.addEventListener('click', function(){
  var userGuess = parseInt(guessInput.value);
  resetBTN.disabled = false;
  if (guessInput.value === ""){
    return alert("Error! Input an actual number.");
  } else if (userGuess < 1 || userGuess > 100) {
    return alert("That number is outside of my parameters. Nerd.");
  }

  lastGuessNum.innerText = userGuess;
  console.log(userGuess);
  lastGuessWas.innerText = "Your last guess was:"
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's what I had in mind!";
    return alert("Dassit!");
    console.log("boom!");
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low.";
    console.log('too low');
  } else {
    outcomeText.innerText = "... and it was too high.";
    console.log('too high');
  }
});


clearBTN.addEventListener('click', function(){
  guessInput.value = "";
  disableClearBTN();
  console.log("Clear was clicked");
});

// Function helper that clears BTN
function disableClearBTN() {
  if (guessInput.value === "") {
    clearBTN.disabled = true;
  }
};

resetBTN.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 100 + 1);
  resetBTN.disabled = true;
  guessInput.value = "";
  outcomeText.innerText = "";
  lastGuessWas.innerText = "Well, go on...";
  lastGuessNum.innerText = "";
  clearBTN.disabled = true;
  console.log(randomNumber);

  // Reset game, get new random number, consolelog that shit empty input string, reset all btns.. etc. 
});
