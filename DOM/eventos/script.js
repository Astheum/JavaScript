// /* Exemplo 01 */
// const img = document.querySelector('img')

// function callbackClick(event) {
//     console.log(event)
// }

// img.addEventListener('click', callbackClick)

// /* Exemplo 02 */
// const animaisLista= document.querySelector('.animais-lista')

// function callbackLista(event) {
//     console.log(event.currentTarget)
//     console.log(event.target)
// }

// animaisLista.addEventListener("click", callbackLista)

// /* Exemplo 03 */
// const linkExterno = document.querySelector('a[href^="http"]')

// function handlecallbackLink(event){
//     event.preventDefault()
//     console.log(this)
// }

// linkExterno.addEventListener('click', handlecallbackLink)

// /* Exemplo 04 */
// const h1 = document.querySelector('h1')

// function handleEvent(event){
//     console.log(event.type, event)
// }
// // h1.addEventListener('click', handleEvent)
// // h1.addEventListener('mouseenter', handleEvent)
// // h1.addEventListener('mousemove', handleEvent)

// // window.addEventListener('scroll', handleEvent)
// // window.addEventListener('resize', handleEvent)
// // window.addEventListener('keydown', handleEvent)

// function handleKeyboard(event) {
//     if(event.key === 'f') {
//         document.body.classList.toggle('fullscreen')
//     }
//     console.log(event.key)
// }
// window.addEventListener('keydown', handleKeyboard)

// /* Exemplo 05 */
// const imgs = document.querySelectorAll('img')

// function handleImg(event){
//     console.log(event.target)
// }


// imgs.forEach((img) => {
//     img.addEventListener('click', handleImg)
// })

/* >>> Exercicios <<< */

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
    event.preventDefault()
    linksInternos.forEach((link) =>{
        link.classList.remove('ativo')
    })
    event.target.classList.add('ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const elementosSite = document.querySelectorAll('body *')

function handleClickElemento(event) {
    event.preventDefault()
    console.log(event.currentTarget)
}

elementosSite.forEach((elemento) => {
    elemento.addEventListener('click', handleClickElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleRemove(event) {
    event.preventDefault()
    event.currentTarget.remove()
}

elementosSite.forEach((elemento) => {
    elemento.addEventListener('click', handleRemove)
})
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const html = document.querySelector('html')

function handleClickT(event) {
    if(event.key === 't') {
        html.classList.toggle('text5rem')
    }
}
window.addEventListener('keydown', handleClickT)