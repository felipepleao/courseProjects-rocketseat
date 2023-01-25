/*

Capturar 2 números e fazer as operações matemáticas
soma, subtração, multiplicação, divisão e resto da divisão

Para cada operação, mostrar um alerta com resultado

*/

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

console.log(numberOne)
console.log(typeof numberOne)

const sum = numberOne + numberTwo
alert(`A soma dos dois números é de: ${sum}`)

const subtraction = numberOne - numberTwo
alert(`A diferença dos dois números é de: ${subtraction}`)

const multiplication = numberOne * numberTwo
alert(`A multiplicação dos dois números é de: ${multiplication}`)

const division = numberOne / numberTwo
alert(`A divisão dos dois números é de: ${division}`)

const restDiv = numberOne % numberTwo
alert(`O resto da divisão entre os dois números é de: ${restDiv}`)