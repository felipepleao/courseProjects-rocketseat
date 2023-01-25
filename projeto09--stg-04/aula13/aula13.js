/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function printPatientIMC(patient) {
  return`
  Paciente ${patient.name} possui o IMC de
  ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `
}

// for(let i = 0; i < patients.length; i++){
//   printPatientIMC(patients[i])
// }

for(let patient of patients){
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}
