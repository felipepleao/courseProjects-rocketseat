import { Modal } from "./modal.js";
import { notANumber, calculateIMC } from "./utils.js";
import { AlertError } from "./alert-error.js"

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  } else {
    AlertError.close()
  }

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
};

inputWeight.addEventListener('keydown', alertErrorClose)
inputHeight.addEventListener('keydown', alertErrorClose)

function alertErrorClose (event) {
  if(event.key) {  
    AlertError.close()
  }
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}