export default function Controls({ buttonPlay, buttonPause }) {

  function toggleHide() {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  }

  function play() {
    toggleHide();
  }

  function pause() {
    toggleHide();
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  return {
    play,
    pause,
    reset,
  };
}