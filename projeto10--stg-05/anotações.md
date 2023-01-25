onclick
pegamos o valor de "input" com .value
  todo input pegamos o valor com .value
  inner pegamos apenas elementos que contém algum conteúdo
- cancelar formulário
  event.preventDefault()
    Você pode usar o event.cancelable (en-US) para checar se o evento é cancelável. Chamar o preventDefault para um evento não cancelável não fará efeito.



### eventos

- dentro do html
  o evento sempre tem que ter o argumento com o nome (event)


### desafios

- pegar função enter e refatorar
- limitar em clicar de 0 a 10 numero func handleTryClick
- executar apenas se tiver um número


### código pronto

# variáveis
const screen1 = document.querySelector(".screen1");
 const screen2 = document.querySelector(".screen2");
 const btnTry = document.querySelector("#btnTry");
 const btnReset = document.querySelector("#btnReset");
 let randomNumber = Math.round(Math.random() * 10);
 console.log(randomNumber)
 let xAttempts = 1;

 let conteudo = btnReset.innerHTML
 console.log(conteudo)

# Events
 btnTry.addEventListener("click", handleTryClick);
 btnReset.addEventListener("click", handleResetClick);
 document.addEventListener('keypress', function(e) { 
   if(e.key == 'Enter' && screen1.classList.contains('hide')) {
     handleResetClick()
   }
 })

# functions
 function handleTryClick(event) {
   event.preventDefault();

   const inputNumber = document.querySelector("#inputNumber");

   if (Number(inputNumber.value) == randomNumber) {   
     toggleScreen()
     screen2.querySelector(
       "h2"
     ).innerText = `acertou em ${xAttempts} tentativas!`;
   }

   inputNumber.value = "";
   xAttempts++;
 }

 function handleResetClick() {
   toggleScreen()
   xAttempts = 1;
   randomNumber = Math.round(Math.random() * 10);
 }

 function toggleScreen() {
   screen1.classList.toggle("hide");
   screen2.classList.toggle("hide");
 }