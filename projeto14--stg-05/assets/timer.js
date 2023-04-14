import Sounds from "./sounds.js"
import { activeEvent } from "./index.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut = 0;
  let newMinutes = 0;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function clearTime() {
    clearTimeout(timerTimeOut);
  }

  function reset() {
    updateDisplay(newMinutes, 0);
    clearTime();
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(newMinutes, 0);
        resetControls();
        activeEvent();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, --seconds);
      countdown();
    }, 1000);
  }

  function removeMinutes() {
    let minutes = 0;
    let minutesPositive = minutesDisplay.textContent > 5;
    if (minutesPositive) {
      minutes = minutesDisplay.textContent = String(
        +minutesDisplay.textContent - 5
      ).padStart(2, "0");

      newMinutes = minutes;
    }
    return newMinutes;
  }

  function addMinutes() {
    let minutes = 0;
    minutes = minutesDisplay.textContent = String(
      +minutesDisplay.textContent + 5
    ).padStart(2, "0");
    newMinutes = minutes;
    return newMinutes;
  }

  function hold() {
    clearTime();
  }

  return {
    reset,
    countdown,
    removeMinutes,
    addMinutes,
    hold,
  };
}
