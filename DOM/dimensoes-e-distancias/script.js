// /* Exemplo 01 */
// const listaAnimais = document.querySelector('.animais-lista')
// const height = listaAnimais.scrollHeight

// console.log(height)

// /* Exemplo 02 */
// const animaisTop = listaAnimais.offsetTop
// console.log(animaisTop)

// /* Exemplo 03 */
// const primeiroh2 = document.querySelector('h2')
// console.log(primeiroh2.offsetLeft)

// /* Exemplo 04 */
// const h2rect = primeiroh2.getBoundingClientRect()
// console.log(h2rect.top)

// if(h2rect.top < 0 ) {
//     console.log('Elemento fora da tela')
// }

// /* Exemplo 05 */
// console.log(
//     window.innerHeight,
//     window.outerHeight,
//     window.outerWidth,
//     window.innerWidth,
//     window.scrollX,
//     window.scrollY
// )

// /* Exemplo 06 */
// const small = window.matchMedia('(max-width: 600px)').matches
// if (small){
//     console.log('Tela menor que 600px')
// } else {
//     console.log('Tela maior que 600px')
// }

/* >>> Exercicios <<< */

// Verifique a distância da primeira imagem em relação ao topo da página
const firstImgRect = document.querySelector('img')

console.log(firstImgRect.getBoundingClientRect().top)

// Retorne a soma da largura de todas as imagens
const imagens= document.querySelectorAll("img")

let imgWidthTotal = 0
imagens.forEach((img) => {
    imgWidthTotal += img.getBoundingClientRect().width
})
console.log(`A soma da largura de todas as imagens é ${imgWidthTotal}`)

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((link) => {
    const height = link.getBoundingClientRect().height
    const width = link.getBoundingClientRect().width

    if (height >= 48 && width >= 48){
        console.log('Possui boa acessibilidade')
    } else {
        console.log('Não possui boa acessibilidade')
    }
    console.log(height, width)
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const width = window.innerWidth
 
if (width <= 720) {
    menu.classList.add('menu-mobile')
}
console.log(menu)