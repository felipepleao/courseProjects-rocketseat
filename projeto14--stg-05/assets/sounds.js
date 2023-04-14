export default function ({
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
}) {
  const buttonForestSound = new Audio("./sounds/Floresta.wav");
  const buttonRainSound = new Audio("./sounds/Chuva.wav");
  const buttonCoffeSound = new Audio("./sounds/Cafeteria.wav");
  const buttonFireplaceSound = new Audio("./sounds/Lareira.wav");
  let pauseForest = true
  let pauseRain = true
  let pauseCoffe = true
  let pauseFire = true
  
  function forestSound() {
    if (pauseForest) {
      buttonForestSound.play();
    } else {
      buttonForestSound.pause();
    }
    pauseForest = !pauseForest
    buttonForest.classList.toggle("buttonApply");
  }
  function rainSound() {
    if (pauseRain) {
      buttonRainSound.play();
    } else {
      buttonRainSound.pause();
    }
    pauseRain = !pauseRain
    buttonRain.classList.toggle("buttonApply");
  }
  function coffeSound() {
    if (pauseCoffe) {
      buttonCoffeSound.play();
    } else {
      buttonCoffeSound.pause();
    }
    pauseCoffe = !pauseCoffe
    buttonCoffe.classList.toggle("buttonApply");
  }
  function fireSound() {
    if (pauseFire) {
      buttonFireplaceSound.play();
    } else {
      buttonFireplaceSound.pause();
    }
    pauseFire = !pauseFire
    buttonFire.classList.toggle("buttonApply");
  }

  return {
    forestSound,
    rainSound,
    coffeSound,
    fireSound,
  };
}
