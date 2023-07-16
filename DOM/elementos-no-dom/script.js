// /* Exemplo 01 */
// const animaisGrid = document.getElementById('animais')
// console.log(animaisGrid)

// /* Exemplo 02 */
// const gridSection = document.getElementsByClassName('grid-section')
// console.log(gridSection[0])

// /* Exemplo 03 */
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
// const ultimoItem = document.querySelector('.animais-lista li:last-child');
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector('ul');

// // Busca dentro do Ul apenas
// const navItem = primeiroUl.querySelector('li');
// console.log(primeiroUl)

// const primeiroLinkInterno = document.querySelector('[href^="#"]')
// console.log(primeiroLinkInterno)

// /* Exemplo 04 */
// const gridSectionAll = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.animais-lista img');

// // Retorna o segundo elemento
// console.log(gridSectionAll[1]);

// const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg[0])

// /* Exemplo 05 */
// const gridSectionHTML = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// // primeiroUl.classList.add('grid-section')

// // console.log(gridSectionHTML[0])
// // console.log(gridSectionNode[0])

// /*Exemplo 06 */
// gridSectionNode.forEach(function(item, index) {
//     console.log(item)
// })

// const arrayGrid = Array.from(gridSectionHTML)

// arrayGrid.forEach(function(item){
//     console.log(item)
// })

/* >>> Exercicios <<< */

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')
imgs.forEach(function(img){
    console.log(img)
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const nomeImagem = document.querySelectorAll('[src^="img/imagem"]')
nomeImagem.forEach(function(imagem){
    console.log(imagem)
})

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
linksInternos.forEach(function(link) {
    console.log(link)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p')
console.log(ultimoParagrafo[ultimoParagrafo.length - 1])

