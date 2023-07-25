// /* Exemplo 01 */
// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach(function(item, index, array) {
//   console.log(item.toUpperCase());
// });

// // com Arrow Function
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

// /* Exemplo 02 */
// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   return 'Carro ' + item;
// });

// carros; // ['Ford', 'Fiat', 'Honda']
// newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

/* Exemplo 03 */
// const numeros = [1, 4, 8, 19, 38, 10]
// const numerosx2 = numeros.map((item) => item * 2 )
// console.log(numerosx2)

// /* Exemplo 04 */
// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const tempoAulas = aulas.map(aula => aula.min);
//   // [15, 10, 20, 25];
  
//   const puxarNomes = aula => aula.nome;
//   const nomesAulas = aulas.map(puxarNomes);
//   // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// /* Exemplo 05 */
// const aulas = [10, 25, 30];
// const reduceAulas = aulas.reduce((acumulador, item) => {
//     return acumulador + item
// }, 0)
// console.log(reduceAulas)

// /* Exemplo 06 */
// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//   if(anterior > atual){
//     return anterior
//   } else {
//     return atual
//   }
// }, 0);
// console.log(maiorValor)

/* Exemplo 07 */
// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
//   }, {})

/* Exemplo 08 */
// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// frutasRight; // Uva Pêra Banana
// frutasLeft; // Banana Pêra Uva

// /* Exemplo 09 */
// const frutas = ['Banana', 'Pêra', 'Uva'];
// const temUva = frutas.some((fruta) => {
//   return fruta === 'Uva';
// }); // true

// function maiorQue100(numero) {
//   return numero > 100;
// }
// const numeros = [0, 43, 22, 88, 101, 2];
// const temMaior = numeros.some(maiorQue100); // true

// /* Exemplo 10 */
// const frutas = ['Banana', 'Pêra', 'Uva', ''];
// // False pois pelo menos uma fruta está vazia '', o que é um valor falsy
// const arraysCheias = frutas.every((fruta) => {
//   return fruta; // false
// });

// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(x => x > 3); // true

// /* Exemplo 11 */
// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === 'Uva'; 
// }); // 2

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45); // 88

// /* Exemplo 12 */
// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta; 
// }); // ['Banana', 'Uva', 'Maçã']

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

/* >>> Exercicios <<< */
// Selecione cada curso e retorne uma array com objetos contendo o título, descricao aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerHTML
    const horas = curso.querySelector('.horas').innerHTML
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})
console.log(objetosCursos)

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior100 = numeros.filter((num) => {
    return num > 100
})
console.log(maior100)

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((item) => {
    return item=== 'Baixo'
})
console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acc, item)=>{
    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
    return acc + precoLimpo
}, 0)

console.log(totalCompras)