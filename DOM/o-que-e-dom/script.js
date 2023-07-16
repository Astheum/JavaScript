// /* Exemplo 01 */
// const href = window.location.href
// console.log(href)

// /* Exemplo 02 */
// const titulo = document.querySelector('h1');

// console.log(titulo.innerText) // retorna o texto;
// console.log(titulo.classList) // retorna as classes;
// console.log(titulo.id) // retorna o id;
// console.log(titulo.offsetHeight) // retorna a altura do elemento;

// function cliqueTituloPrincipal(){
//     console.log('Clicou em', titulo)
// }
// titulo.addEventListener('click', cliqueTituloPrincipal) // ativa a função callback ao click no titulo

/* >>> Exercicios <<< */

// Retorne o url da página atual utilizando o objeto window
const hrefPaginaAtual = location.href
console.log(`O url atual é ${hrefPaginaAtual}`)
// Seleciona o primeiro elemento da página que possua a classe ativo
const primeiroElementoAtivo = document.querySelector('.ativo')
console.log(primeiroElementoAtivo)
// Retorne a linguagem do navegador
console.log(navigator.language)
// Retorne a largura da janela 
console.log(innerWidth)
