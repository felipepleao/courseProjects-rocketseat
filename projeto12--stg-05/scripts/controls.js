export default function Controls() {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function reset() {
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  return {
    reset,
    play,
    pause,
  };
}
