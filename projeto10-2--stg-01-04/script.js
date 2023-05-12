// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

// alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 5;
let numberTwo = 15;

let sum = numberOne + numberTwo;

console.log(sum);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

let number = 10;
let isNumber = typeof number === "number";

isNumber ? console.log("É um número") : console.log("Não é um número");

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let word = "10";
let isString = typeof word === "string";

isString ? console.log("É uma string") : console.log("Não é uma string");

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boolean = 5 > 2;
let isBoolean = typeof boolean === "boolean";

isBoolean ? console.log("É um booleano") : console.log("Não é um booleano");

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberOnee = 10;
let numberTwoo = 5;

let subtraction = numberOnee - numberTwoo;

console.log(subtraction);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberOneee = 5;
let numberTwooo = 5;

let multiplication = numberOneee * numberTwooo;

console.log(multiplication);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numbOne = 5;
let numbTwo = 5;

let division = numbOne / numbTwo;

console.log(division);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numb1 = 4;
let numb2 = 2;
let isEven = numb1 % numb2 === 0;

isEven ? console.log("É um número par") : console.log("Não é um número par");

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um n

let number1 = 4;
let number2 = 3;
let isOdd = number1 % number2 !== 0;

isOdd ? console.log("É um número ímpar") : console.log("Não é um número ímpar");
