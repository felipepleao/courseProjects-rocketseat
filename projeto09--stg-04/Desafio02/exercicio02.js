/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/
let studentProfile = [];
let numberOfStudents = Number(
  prompt("Digite o número de estudantes a ser cadastrados.")
);

for (let i = 0; i < numberOfStudents; i++) {
  let newObject = {};
  studentProfile.push(newObject);
}

for (let i = 0; i < numberOfStudents; i++) {
  studentProfile[i].name = prompt("Nome do estudante:");
  studentProfile[i].nota1 = Number(prompt("Digite a nota da primeira prova:"));
  studentProfile[i].nota2 = Number(prompt("Digite a nota da segunda prova:"));
}

function average(student) {
  let average = ((student.nota1 + student.nota2) / 2).toFixed(1);
  if (average > 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `;
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `;
  }
}

for (let student of studentProfile) {
  let studentMessage = average(student);
  alert(studentMessage);
}
