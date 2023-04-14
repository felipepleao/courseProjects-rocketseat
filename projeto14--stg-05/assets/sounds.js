export default function () {

  const buttonForestSound = new Audio("./sounds/Floresta.wav?raw=true")
  const buttonRainSound = new Audio("./sounds/Chuva.wav")
  const buttonCoffeSound = new Audio("./sounds/Cafeteria.wav")
  const buttonFireplaceSound = new Audio("./sounds/Lareira.wav")


  return {
    buttonForestSound,
    buttonRainSound,
    buttonCoffeSound,
    buttonFireplaceSound,
  }

}