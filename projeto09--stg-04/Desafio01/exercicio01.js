/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = Number(prompt("Digite o primeiro número"));
let numberTwo = Number(prompt("Digite o segundo número"));

let sum, subtraction, multiplication, division, remainder, number, equal;

sum = numberOne + numberTwo;
subtraction = numberOne - numberTwo;
multiplication = numberOne * numberTwo;
division = (numberOne / numberTwo).toFixed(2);
remainder = (numberOne % numberTwo).toFixed(2);

number = sum % 2 == 0;
equal = numberOne == numberTwo

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${subtraction}`);
alert(`A multiplicação dos dois números é: ${multiplication}`);
alert(`A divisão dos dois números é: ${division}`);
alert(`O resto dos dois números é: ${remainder}`);

if (number) {
  alert(`A soma dos números é par: ${sum}`)
} else {
  alert(`A soma dos números é impar: ${sum}`)
}

if (equal) {
  alert(`Os números inseridos são iguais: ${numberOne} e ${numberTwo}`)
} else {
  alert(`Os números inseridos são diferentes: ${numberOne} e ${numberTwo}`)
}
