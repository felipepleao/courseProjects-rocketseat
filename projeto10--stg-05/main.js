// variáveis
const inputNumber = document.querySelector("#inputNumber");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const alertMessage = document.querySelector(".screen2 h2");
let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

// eventos

btnTry.addEventListener("click", handleClickTry, cancel);
btnReset.addEventListener("click", handleClickReset);
document.addEventListener("keypress", pressEnter);

// funções
function handleClickTry(event) {
  event.preventDefault();

  if (inputNumber.value < 0 || inputNumber.value > 10) {
    inputNumber.value = "";
    alert("Apenas números entre 0 e 10");
  }

  if (inputNumber.value == randomNumber) {
    toggle();
    alertMessage.innerHTML = `Acertou em ${xAttempts} tentativa(s)!`;
  } else {
    inputNumber.value = "";
  }

  xAttempts++;
}

function handleClickReset(event) {
  toggle();
  inputNumber.value = "";
  randomNumber = Math.round(Math.random() * 10);
  inputNumber.value.setAttribute(autofocus)
  xAttempts = 1;
}

function toggle() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}

function pressEnter(event) {
  if (event.key == "Enter" && screenOne.classList.contains("hide")) {
    handleClickReset();
  }
}

function cancel(event) {
  if ((inputNumber.value = "")) {
    btnTry.removeEventListener("click", handleClickTry);
  }
}
