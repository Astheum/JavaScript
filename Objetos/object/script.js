// /* Exemplo 01 */
// const pessoa = {
//   nome: 'Matheus',
//   idade: 18
// }

// /* Exemplo 02 */
// const carro = {
//   rodas: 4,
//   init(valor){
//     this.marca = valor
//     return this
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar(){
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro).init('Honda')
// const ferrari = Object.create(carro).init('Ferrari')

// /* Exemplo 03 */
// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carro = {
//   rodas: 4,
//   mala: true,
// }

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

// /* Exemplo 04 */
// const moto = {}
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// })

// moto.rodas = 4;
// delete moto.capacete;
// moto;
// // {rodas: 2}

// /* Exemplo 05 */
// const moto = {}
// Object.defineProperties(moto, {
//   velocidade: {
//     get() {
//       return this._velocidade;
//     },
//     set(valor) {
//       this._velocidade = 'Velocidade ' + valor;
//     }
//   },
// })

// moto.velocidade = 200;
// moto.velocidade;
// // Velocidade 200

// /* Exemplo 06 */
// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptor(window, 'innerHeight');
// // Puxa de uma única propriedade

// /* Exemplo 07 */
// Object.keys(Array);
// // [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.keys(carro);
// // ['marca', 'ano']
// Object.values(carro);
// // ['Ford', 2018]
// Object.entries(carro);
// // [['marca', 'Ford'], ['ano', 2018]]

// /* Exemplo 08 */
// Object.getOwnPropertyNames(Array);
// // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// Object.getOwnPropertyNames(Array.prototype);
// // [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.getOwnPropertyNames(carro);
// // ['marca', 'ano']

// /* Exemplo 09 */
// const frutas = ['Banana', 'Pêra']
// Object.getPrototypeOf(frutas);
// Object.getPrototypeOf(''); // String

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// Object.is(frutas1, frutas2); // false

// /* Exemplo 10 */
// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro);
// Object.seal(carro);
// Object.preventExtensions(carro);

// Object.isFrozen(carro); // true
// Object.isSealed(carro); // true
// Object.isExtensible(carro); // false

// /* Exemplo 11 */
// const frutas = ['Banana', 'Uva'];
// frutas.constructor; // Array

// const frase = 'Isso é uma String';
// frase.constructor; // String

// /* Exemplo 12 */
// const frutas = ['Banana', 'Uva'];

// frutas.hasOwnProperty('map'); // false
// Array.hasOwnProperty('map'); // false
// Array.prototype.hasOwnProperty('map'); // true

// Array.prototype.propertyIsEnumerable('map'); // false
// window.propertyIsEnumerable('innerHeight'); // true

// /* Exemplo 13 */
// const frutas = ['Banana', 'Uva'];

// Array.prototype.isPrototypeOf(frutas); // true

// /* Exemplo 14 */
// const frutas = ['Banana', 'Uva'];
// frutas.toString(); // 'Banana,Uva'
// typeof frutas; // object
// Object.prototype.toString.call(frutas); // [object Array]

// const frase = 'Uma String';
// frase.toString(); // 'Uma String'
// typeof frase; // string
// Object.prototype.toString.call(frase); // [object String]

// const carro = {marca: 'Ford'};
// carro.toString(); // [object Object]
// typeof carro; // object
// Object.prototype.toString.call(carro); // [object Object]

// const li = document.querySelectorAll('li');
// typeof li; // object
// Object.prototype.toString.call(li); // [object NodeList]

/* >>> Exercicios <<< */
// Crie uma função que verifique corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado(''))

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)

// Liste o nome de todas as propriedades do protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))