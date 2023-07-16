// /* Exemplo 01 */
// const h1 = document.querySelector('h1')

// console.log(h1.outerHTML)
// console.log(h1.innerHTML)
// console.log(h1.innerText)

// h1.innerHTML = '<p>Novo titulo' // Insere o elemento
// h1.outerHTML = '<p>Titulo' // Substitui o elemento

// console.log(h1.outerHTML)
// console.log(h1.innerHTML)
// console.log(h1.innerText)

// /* Exemplo 02 */
// const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement)
// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)

// console.log(lista.children[--lista.children.length])
// console.log(lista.querySelector('li:last-child'))

// /* Exemplo 03 */
// console.log(lista.childNodes) // Retorna todos os elementos NODE presentes onde é selecionado
// console.log(lista.previousSibling) // Retorna diretamente o que é o elemento NODE anterior

// /* Exemplo 04 */
// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// const mapa = document.querySelector('.mapa')

// // animais.appendChild(titulo)
// // contato.replaceChild(lista, titulo)
// // contato.removeChild(titulo)
// // contato.insertBefore(animais, mapa)

// /*  Exemplo 06 */
// const novoh1 = document.createElement('h1')
// novoh1.innerText = 'Novo Titulo'
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// console.log(novoh1)

// /* Exemplo 07 */
// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')
// const cloneH1 = h1.cloneNode(true)

// faq.appendChild(cloneH1)

/* >>> Exercicios <<< */

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista')

console.log(faqLista.firstElementChild)

// Selecione o DD referente ao primeiro DT
console.log(faqLista.firstElementChild.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')
const body = document.querySelector('body')

body.insertBefore(faq, animais)