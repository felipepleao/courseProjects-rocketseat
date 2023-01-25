/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

alert("Iremos fazer a soma de dois números!");

let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

let sum = Number(numberOne) + Number(numberTwo);

console.log("A soma dos dois número é: " + sum);
console.log(`A soma dos dois números é: ${sum}`);
