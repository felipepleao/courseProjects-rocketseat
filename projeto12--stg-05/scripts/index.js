import Controls from "./controls.js";
import Timer from "./timer.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesCounter = document.querySelector(".minutes");
const secondsCounter = document.querySelector(".seconds");
let minutes = Number(minutesCounter.textContent);
let seconds = Number(secondsCounter.textContent);
let timerTimeOut;

const controls = Controls();

const timer = Timer({
  minutesCounter,
  secondsCounter,
  timerTimeOut,
  resetControls,
});

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  clearTimeout(timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
});

buttonSet.addEventListener("click", function () {
  newMinutes = prompt("Quantos minutos?");
  newSeconds = prompt("Quantos segundos?");
  if (!newMinutes || !newSeconds) {
    resetTimer();
    return;
  }

  minutes = newMinutes;
  seconds = newSeconds;

  updateTimerDisplay(minutes, seconds);
});
