// /* Exemplo 01 */
// var pessoa = {
//   nome: 'Matheus',
//   sobrenome: 'Ferreira',
//   idade: 18,
//   possuiFaculdade: false
// }
// console.log(pessoa)

// /* Exemplo 02 */
// var quadrado = {
//   lados: 4,
//   area (lado){
//     return lado * lado
//   },
//   perimetro (lado){
//     return this.lados * lado
//   }
// }
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));

// /* Exemplo 03 */
// // Math é um exemplo de objeto para organizar o código
// console.log(Math.random());
// console.table(quadrado)

// /* Exemplo 04 */
// // var height = 120
// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: '#84E',

//   // Exemplo usando o .this (seleciona o valor atribuido dentro do objeto)
//   metadeHeight() {
//     return this.height / 2
//   }
// }

// // Trocando um valor atribuido
// menu.backgroundColor = '#000'

// // Adicionando um novo valor ao objeto
// menu.color = 'blue'

// // Criando uma variavel com o valor atribuido do objeto
// var bg = menu.backgroundColor

/* >>> Exercicios <<< */

// Crie um objeto com os seus dados pessoais, deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Matheus',
  sobrenome: 'Ferreira',
  idade: 18,
  cpf: '***.***.***.**',
  telefone: '34 9 9860-1557',

  nomeCompleto() {
    return  `${this.nome} ${this.sobrenome}`
  }
}
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,

  latir(pessoa) {
    if (pessoa === 'homem'){
    return 'O chachorro latiu'
  } else {
    return 'O cachorro não latiu' 
    }
  }
}
console.log(cachorro.latir('homem'))