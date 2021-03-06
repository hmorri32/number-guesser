let guessInput = document.getElementById("guess");
let submitBTN = document.getElementById("submit");
let clearBTN = document.getElementById("clear-input");
let lastGuessWas = document.getElementById("last-guess-was");
let lastGuessNum = document.getElementById("last-guess-num");
let outcomeText = document.getElementById("outcome-text");
let resetBTN = document.getElementById("reset");
let newMin = document.getElementById("new-min");
let newMax = document.getElementById("new-max");
let resetNew = document.getElementById("reset-new");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let min = 0;
let max = 100;
let userGuess;
console.log(randomNumber);

const disableButtons = () => {
  resetBTN.disabled = true;
  clearBTN.disabled = true;
  resetNew.disabled = true;
  submitBTN.disabled = true;
};

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
  let userGuess = parseInt(guessInput.value);
  resetBTN.disabled = false;
  lastGuessNum.innerText = userGuess;
  lastGuessWas.innerText = "Your last guess was:";
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

const userGuessHelper = () => {
  let userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    outcomeText.innerText = "... and that's exactly what I had in mind!";
  } else if (userGuess < randomNumber) {
    outcomeText.innerText = "... and it was too low. try again.";
  } else {
    outcomeText.innerText = "... and it was too high. Try again.";
  }
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
};

const changeRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const disableClearNewBtn = () => (resetNew.disabled = true);
const resetNewRangeButton = () => (resetNew.disabled = false);

newMin.addEventListener("keyup", () => resetNewRangeButton());
newMax.addEventListener("keyup", () => resetNewRangeButton());
guessInput.addEventListener("keyup", enableSubmitBtns);
submitBTN.addEventListener("click", submit);
clearBTN.addEventListener("click", clearStuff);
resetBTN.addEventListener("click", resetGame);
