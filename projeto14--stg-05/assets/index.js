import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import { elements } from "./elements.js";

const {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonRemoveMinutes,
  buttonAddMinutes,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
} = elements;

const sound = Sound({
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
});

const controls = Controls({
  buttonPlay,
  buttonPause,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

function disableEvent() {
  buttonRemoveMinutes.removeEventListener("click", timer.removeMinutes);
  buttonAddMinutes.removeEventListener("click", timer.addMinutes);
}

function activeEvent() {
  buttonRemoveMinutes.addEventListener("click", timer.removeMinutes);
  buttonAddMinutes.addEventListener("click", timer.addMinutes);
}

//events display buttons

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  disableEvent();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  activeEvent();
});
buttonRemoveMinutes.addEventListener("click", timer.removeMinutes);

buttonAddMinutes.addEventListener("click", timer.addMinutes);

//events sound buttons

buttonForest.addEventListener("click", (event) => {
  sound.forestSound();
});

buttonRain.addEventListener("click", () => {
  sound.rainSound();
});

buttonCoffe.addEventListener("click", () => {
  sound.coffeSound();
});

buttonFire.addEventListener("click", () => {
  sound.fireSound();
});

export { activeEvent };
