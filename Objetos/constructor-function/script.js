// /* Exemplo 01 */
// function Carro(marcaAtribuida, PrecoAtribuido) {
//     this.marca = marcaAtribuida
//     this.preco = PrecoAtribuido
// }

// const honda = new Carro('Honda', 3000) 
// const fiat = new Carro('Fiat', 4000)

// /* Exemplo 02 */
// function Carro2(marca, precoInicial) {
//     const taxa = 1.2
//     const precoFinal = precoInicial * taxa
//     this.marca = marca
//     this.preco = precoFinal
// }

// const mazda = new Carro2('Mazda', 5000)

// /* Exemplo REAL */
// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor)
//     },
//     ativar() {
//         this.element().classList.add('ativo')
//     }
// }

// /* Exemplo REAL Construction Function */

// function Dom(seletor) {
//     const element = document.querySelector(seletor)
//     this.ativar = () => {
//         element.classList.add('ativo')
//     }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')
// const ultimaLi = new Dom('li:last-child')

/* >>> Exercicios */
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = () => {
        console.log(`${this.nome} andou`)
    }
  }
  
  // Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
  const joao = new Pessoa('Joao', 20)
  const maria = new Pessoa('Maria', 25)
  const bruno = new Pessoa('Bruno', 15)
  
  // Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
  // elements, retorna NodeList com os elementos selecionados addClass(classe), adiciona a classe a todos os elementos removeClass(classe), remove a classe a todos os elementos
  function Dom(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = (classe) => {
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = (classe) => {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const ul = new Dom('ul')
const li = new Dom('li')