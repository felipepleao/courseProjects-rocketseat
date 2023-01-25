/*
  Capture 10 itens para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = []

for(let item = 0; item < 10; item++) {
  let name = prompt("Digite um item: " + (item + 1))
  items[item] = name
}

alert(items)












// let students = [];
// let notas = [];

// for (let i = 0; i < 5; i++) {
//   let name = prompt("Digite o nome do aluno: ");
//   let nota = prompt("Digite a nota do aluno: ");

//   students[i] = name;
//   notas[i] = Number(nota);  
// }

// let total = 0

// for (let i = 0; i < 5; i++) {
//   total += notas[i]
// }

// let media = Number(total) / 5

// alert("A média da turma é de: " + media)


