"use strict";
const inputNumber = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const inputMessage = document.querySelector(".js-clue");
const inputCounter = document.querySelector(".js-counter");

function getRandomNumber(max) {
  let number = Math.ceil(Math.random() * max);
  return number;
}
const number = getRandomNumber(100);
console.log(number);

function selectRandomMessage() {
  const selectedNumber = parseInt(inputNumber.value);
  console.log(selectedNumber);
  if (selectedNumber < 1 || selectedNumber > 100) {
    // "El número debe estar entre 1 y 100"
    inputMessage.value = "El número debe estar entre 1 y 100";
    console.log(inputMessage.value);
  } else if (selectedNumber > number) {
    // "Demasiado alto"
    inputMessage.value = "Demasiado alto";
  } else if (selectedNumber < number) {
    // "Demasiado bajo"
    inputMessage.value = "Demasiado bajo";
  } else if (selectedNumber === number) {
    // "Has ganado campeona"
    inputMessage.value = "Has ganado campeona";
  }
}

let cont = 0;
function counterSelect() {
  cont++;
  inputCounter.value = `Número de intentos: ${cont}`;
}

function handleClickButton() {
  selectRandomMessage();
  counterSelect();
}

button.addEventListener("click", handleClickButton);
