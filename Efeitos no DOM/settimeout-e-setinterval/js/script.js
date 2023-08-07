// /* Exemplo 01 */
// function espera(texto) {
//     console.log(texto);
//   }
// setTimeout(espera, 1000, 'Um segundo')

// // ou

// setTimeout(() => {
//     console.log('teste')
// }, 5000);

// /* Exemplo 02 */
// for(let i = 0; i < 20; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 300 * i);
// }
  
// /* Exemplo 03 */
// const btn  = document.querySelector('button')
// btn.addEventListener('click', handleClick)

// function handleClick() {
//     setTimeout(() => {
//         this.classList.add('active')
//     }, 1000)
//     console.log('clicou')
// }

// /* Exemplo 04 */
// setInterval(() => {
//     console.log('Passou 1s')
// }, 1000);
  
// // loop a cada segundo
// let i = 0;
// const interval = setInterval(() => {
//     console.log(i++);
//     if(i >20){
//         clearInterval(interval)
//     }
//   }, 1000);
  
/* >>> Exercicios <<< */
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarCor() {
//     document.body.classList.toggle('vermelho')
// }

// setInterval(mudarCor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector ('[data-start]')
const pausar = document.querySelector('[data-pause]')
const tempo = document.querySelector('[data-tempo]')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click',pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0
let timer

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 100);
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled', '')
}

function resetarTempo() {
   tempo.innerText = 0
   i = 0
}