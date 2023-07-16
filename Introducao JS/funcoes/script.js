// /* Exemplo 01 */
// function areaQuadrado (lado){
//   return lado * lado
// }

// console.log(areaQuadrado(10))

// /* Exemplo 02 */
// function pi(){
//   return 3.14
// }

// var total = 5 * pi()
// console.log(total)

// /* Exemplo 03 */
// function imc(peso, altura){
//   const imc = peso / (altura ** 2)
//   return imc
// }

// console.log(imc( 80, 1.80))

// /* Exemplo 04 */
// function corFavorita(cor){
//   if(cor === 'azul'){
//     return 'Eu gosto do céu'

//   } else if (cor === 'verde'){
//     return 'Eu gosto do campo'

//   } else {
//     return 'Não gosto de nada'

//   }
// }
// console.log(corFavorita('azul'))

// /* Exemplo 05 */
// addEventListener('click', function(){ 
//   console.log('clicou')
//  }
// )

// /* Exemplo 06 */
// function imc2(peso, altura) {
//   const imc = peso / (altura ** 2);
//   console.log(imc);
// }

// imc2(80, 1.80); // retorna o imc
// console.log(imc2(80, 1.80)); // retorna o imc e undefined

// /* Exemplo  07 */
// function terceiraIdade(idade){
//   if(typeof idade !== 'number'){
//     return 'Por favor digite um número'
//   } else if(idade >= 60){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(terceiraIdade(60))

// /* Exemplo 08 */
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
// }
// console.log(totalPaises); // erro, totalPaises não definido


// /* Exemplo 09 */
// var profissao = 'Designer';

// function dados() {
//   var nome = 'André';
//   var idade = 28;
//   function outrosDados() {
//     var endereco = 'Rio de Janeiro';
//     var idade = 29;
//     return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//   }
//   return outrosDados();
// }

// dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

/* >>> Exercicios <<< */

// Crie uma função para verificar se um valor é Truthy
function isTruthy(value){
 return !!value
}
console.log(isTruthy(1))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4
}
console.log(`o perimetro do quadrado é ${perimetro(1)}`)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(){
  var nome = 'Matheus'
  var sobrenome = 'Ferreira'
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto())

// Crie uma função que verifica se um número é par
 function par(num){
  if (num%2 == 0){
    return `${num} é par`
  } else {
    return `${num} é impar`
  }
 }
console.log(par(2))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dado(dado){
  return typeof dado
}
console.log(dado(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log(nomeCompleto())
  }
)

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))