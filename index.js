var guessInput = document.getElementById("guess");
var submitBTN = document.getElementById("submit");
var clearBTN = document.getElementById("clear-input");
var lastGuessWas = document.getElementById("last-guess-was");
var lastGuessNum = document.getElementById("last-guess-num");
var outcomeText = document.getElementById("outcome-text");
var resetBTN = document.getElementById("reset");
var newMin = document.getElementById("new-min");
var newMax = document.getElementById("new-max");
var resetNew = document.getElementById("reset-new");
var min = 0;
var max = 100;
var randomNumber = Math.floor(Math.random() * 100 + 1);
var userGuess;
console.log(randomNumber);

(() => {
  disableButtons();
})();

const enableSubmitBtns = () => {
  clearBTN.disabled = false;
  submitBTN.disabled = false;
};

const submit = () => {
  userGuessHelper();
  updateDom();
};

const updateDom = params => {
  var userGuess = parseInt(guessInput.value);
  resetBTN.disabled = false;
  lastGuessNum.innerText = userGuess;
  lastGuessWas.innerText = "Your last guess was:";
};

guessInput.addEventListener("keyup", enableSubmitBtns);
submitBTN.addEventListener("click", submit);
clearBTN.addEventListener("click", clearStuff);
resetBTN.addEventListener("click", resetGame);

const userGuessHelper = () => {
  var userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's exactly what I had in mind!";
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low. try again.";
  } else {
    outcomeText.innerText = "... and it was too high. Try again.";
  }
};

const clearStuff = () => {
  guessInput.value = "";
  clearBTN.disabled = true;
};

const resetGame = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  disableButtons();
  resetInputFieldValue();
  resetGuessText();
};

const resetGuessText = () => {
  outcomeText.innerText = "";
  lastGuessWas.innerText = "";
  lastGuessNum.innerText = "";
};

const resetInputFieldValue = () => {
  guessInput.value = "";
  newMax.value = "";
  newMin.value = "";
};

const disableButtons = () => {
  resetBTN.disabled = true;
  clearBTN.disabled = true;
  resetNew.disabled = true;
  submitBTN.disabled = true;
};

const changeRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

newMin.addEventListener("keyup", () => {
  min = parseInt(newMin.value);
  randomNumber = changeRange(min, max);
});

newMax.addEventListener("keyup", () => {
  max = parseInt(newMax.value);
  randomNumber = changeRange(min, max);
});

resetNew.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  clearOwnRangeSection();
  disableClearNewBtn();
});

const clearOwnRangeSection = () => {
  newMax.value = "";
  newMin.value = "";
}

const disableClearNewBtn = () => {
  resetNew.disabled = true;
}

// Input field keyup to enable Clear New Range btn
newMin.addEventListener("keyup", () => {
  resetNewRangeButton();
});

newMax.addEventListener("keyup", () => {
  resetNewRangeButton();
});
// User range button helper
const resetNewRangeButton = () => {
  resetNew.disabled = false;
}
