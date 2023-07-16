// /* Exemplo 01 */
// const imgs = document.querySelectorAll('img')
// imgs.forEach(function(img){
//     console.log(img)
// })

// /* Exemplo 02 */
// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//   console.log(item);
// });

// /* Exemplo 03 */
// // Arrow Function
// imgs.forEach((img) => {
//     console.log(img)
// }) 

// // Sem chaves retornando apenas um item
// imgs.forEach((img) => console.log(img))

/* >>> Exercicios <<< */

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((paragrafo) => console.log(paragrafo))

// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafoTexto) => console.log(paragrafoTexto.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
})

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => (i++))

