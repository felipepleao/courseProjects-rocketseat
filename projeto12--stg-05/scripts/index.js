import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  sound.pressButton()
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton()
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton()
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
  sound.bgAudio.pause()
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
  sound.bgAudio.play()
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});
