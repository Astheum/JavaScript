// /* Exemplo 01 */
// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade= idade
// }

// Pessoa.prototype.andar = function () {
//     console.log(`${this.nome} andou`)
// }

// Pessoa.prototype.nadar = function () {
//     console.log(`${this.nome} nadou`)
// }

// const matheus = new Pessoa('Matheus', 18)

// /* Exemplo 02 */
// const pais = 'Brasil'
// const estado = new String('Minas Gerais')

// console.log(pais.charAt(0))
// console.log(estado.charAt(0))

// /* Exemplo 03 */
// const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

// const arrayListaAnimais = Array.from(listaAnimais)

// /* Exemplo 04 */
// const carro = {
//     marca: 'Ford',
//     preco: 2000,
//     andar() {
//         return true
//     }
// }

/* >>> Exercicios <<< */

// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade. Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function() {
    console.log(`O nome completo desta pessoa é ${this.nome} ${this.sobrenome}`)
}

const matheus = new Pessoas('Matheus', 'Ferreira', 18)

// Liste os métodos acessados por  dados criados com NodeList, HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; console.log(li.constructor.name) // HTMLLIElement
li.click; console.log(li.click.constructor.name) // Function
li.innerText; console.log(li.innerText.constructor.name) // String
li.value; console.log(li.value.constructor.name) // Number
li.hidden; console.log(li.hidden.constructor.name) // Boolean
li.offsetLeft; console.log(li.offsetTop.constructor.name) // Number
li.click(); // undefined / null

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
