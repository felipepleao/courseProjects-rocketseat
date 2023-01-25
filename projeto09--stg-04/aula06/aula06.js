/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt("Nome do aluno(a): ");
let noteOne = prompt("Primeira nota: ");
let noteTwo = prompt("Segunda nota: ");
let noteThree = prompt("Terceira nota: ");


let average = (parseFloat(noteOne) + Number(noteTwo) + Number(noteThree)) / 3;

average = average.toFixed(1)

// if (average > 6) {
//   alert(`Parabéns ${studentName}, você foi aprovado!, sua média foi ${average}`);
// } else {
//   alert(`${studentName}, infelizmente você não foi aprovado, sua média foi: ${average}.
// Continue estudando para passar na recuperação!`);
// }

if (average >= 6) {
  alert(`Parabéns ${studentName}, você foi aprovado!, sua média foi ${average}`)
} else if (average < 6 && average > 3) {
  alert(`${studentName}, infelizmente você não foi aprovado, sua média foi: ${average}.
Continue estudando para passar na recuperação`)
} else {
  alert(`Sinto muito ${studentName}, você foi reprovado com a média de ${average}`)
}

