/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Felipe",
    age: 30,
    weight: 85,
    height: 180
  },
  {
    name: "Amanda",
    age: 28,
    weight: 72,
    height: 168
  },
  {
    name: "Isabella",
    age: 29,
    weight: 58,
    height: 162
  },
  {
    name: "Paula",
    age: 27,
    weight: 60,
    height: 162
  }
]

let patientsNames = []
let patientsAges = []
let patientsWeights = []

for(let addPatient of patients){
  patientsNames.push(addPatient.name)
  patientsAges.push(addPatient.age)
  patientsWeights.push(addPatient.weight)
}

for(let i = 0; i < patients.length; i++){
  alert(`${patientsNames[i]} tem ${patientsAges[i]} anos e pesa ${patientsWeights[i]} kg`)
}

