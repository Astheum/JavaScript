// /* Exemplo 01 */
// const perimetro = new Function('lado', 'return lado * 4')
// console.log(perimetro(5))

// /* Exemplo 02 */
// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.length)
// console.log(somar.name)

// /* Exemplo 03 */
// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Ford 2018

// /* Exemplo 04 */
// const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const frutas = ['Banana', 'Pêra', 'Uva'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// }); // Log de cada Fruta

// /* Exemplo 05 */

// function Dom(seletor) {
//   this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe)
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativo')

// /* Exemplo 06 */
// Array.prototype.mostrarThis = function() {
//   console.log(this)
// }

// const frutas = ['Uva', 'Maçã', 'Banana'];

// Array.prototype.pop.call(frutas)
// frutas.pop()

// /* Exemplo 07 */
// const li = document.querySelectorAll('li');

// const filtro = Array.prototype.filter.call(li, function(item) {
//   return item.classList.contains('ativo')
// })

// console.log(filtro)

// /* Exemplo 08 */
// const numeros = [3,4,6,1,34,44,32];

// console.log(Math.max.call(null, numeros)) // Nan
// console.log(Math.max.apply(null, numeros)) // Lê a array

// /* Exemplo 09 */
// const li = document.querySelectorAll('li');

// function itemPossuiAtivo(item) {
//   return item.classList.contains('ativo');
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

// /* Exemplo 10 */
// const li = document.querySelectorAll('li');

// const filtrarLi = Array.prototype.filter.bind(li, function(item) {
//   return item.classList.contains('ativo');
// });
// console.log(filtrarLi) // Retorna a função
// console.log(filtrarLi()) // Necessario executar, neste caso

// /* Exemplo 11 */
// const $ = document.querySelectorAll.bind(document)

// /* Exemplo 12 */
// const carro = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }

// const honda = {
//   marca: 'Honda',
// }

// const acelerarHonda = carro.acelerar.bind(honda)
// console.log(acelerarHonda(100, 20))

// /* Exemplo 13 */
// function imc(altura, peso) {
//   return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.80);

// imc(1.80, 70); // 21.6
// imc180(70); // 21.6

/* >>> Exercicios <<< */
// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, item) => {
  return acc + item.innerText.length
}, 0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros: tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null
  elemento.content
  return elemento
}

console.log(criarElemento('li', 'ativo', 'Conteudo'))

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

console.log(h1Titulo('Titulo h1'))