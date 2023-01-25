export default function Timer({
  minutesCounter,
  secondsCounter,
  timerTimeOut,
  resetControls,
}) {

  function updateTimerDisplay(minutes, seconds) {
    minutesCounter.textContent = String(minutes).padStart(2, "0");
    secondsCounter.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateTimerDisplay(minutes, seconds);
    clearTimeout(timerTimeOut);
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesCounter.textContent);
      let seconds = Number(secondsCounter.textContent);

      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateTimerDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  return {
    countdown,
    reset
  };
}
