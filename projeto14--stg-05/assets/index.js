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
  buttonAddMinutes,
  buttonRemoveMinutes,
} = elements;

const sound = Sound();

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

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  disableEvent();
  sound.buttonCoffeSound()
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

export { activeEvent };
