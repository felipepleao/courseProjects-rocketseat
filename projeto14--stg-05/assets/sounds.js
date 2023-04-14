export default function () {
  const buttonForestSound = new Audio("./sounds/Floresta.wav");
  const buttonRainSound = new Audio("./sounds/Chuva.wav");
  const buttonCoffeSound = new Audio("./sounds/Cafeteria.wav");
  const buttonFireplaceSound = new Audio("./sounds/Lareira.wav");

  function forestSound() {
    buttonForestSound.play();
  }
  function rainSound() {
    buttonRainSound.play();
  }
  function coffeSound() {
    buttonCoffeSound.play();
  }
  function fireSound() {
    buttonFireplaceSound.play();
  }

  return {
    forestSound,
    rainSound,
    coffeSound,
    fireSound,
  };
}
