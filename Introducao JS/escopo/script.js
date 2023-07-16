// /* Exemplo 01 */
// function mostrarCarro() {
//     var carro = 'Fusca';
//     console.log(carro);
//   }
  
//   mostrarCarro(); // Fusca no console
//   // console.log(carro); ERRO, carro is not defined
  

// /* Exemplo 02 */
// if(true) {
//   let mes = 'mês'
//   console.log(mes)
// }
// // console.log(mes); ERRO, mes is not defined

// /* Exemplo 03 */
// if(true) {
//   const carro = 'Fusca'
//   console.log(carro)
// }
// //console.log(carro); ERRO, carro is not defined

// /* Exemplo 04 */
// {
//   var carro2 = 'Fusca 2';
//   const ano = 2018;
// }
// console.log(carro2); // Carro
// // console.log(ano); ERRO, ano is not defined


// /* Exemplo CONST */
// // Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
// const mes = 'Dezembro';
// // mes = 'Janeiro'; ERRO, tentou modificar o valor
// // const semana; ERRO, declarou sem valor

// const data = {
//   dia: 28,
//   mes: 'Dezembro',
//   ano: 2018,
// }

// data.dia = 29// Funciona
// console.log(data)
// // data = 'Janeiro'; ERRO

// /* Exemplo  LET */
// // Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
// let ano2;
// ano2 = 2018;
// ano2++;
// console.log(ano2); // 2019

// // let ano2 = 2020; ERRO, redeclarou a variável

/* >>> Exercicios <<< */

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}
console.log('estava fora do escopo')

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4))
console.log(dividirDois(6))

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
