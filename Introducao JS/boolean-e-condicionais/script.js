// /* Exemplo 01 */
// var possuiGraduacao = false
// var possuiDoutorado = false
// if(possuiGraduacao) {
//     console.log('possui graduação')
// } else if(possuiDoutorado) {
//         console.log('possui doutorado')
// } else {
//     console.log('não possui nada')
// }

// /* Exemplo 02 */
// var nome = 'Matheus'

// if(nome) {
//     console.log(nome)
// } else {
//     console.log('nome não existe')
// }

// /* Exemplo 03 */
// var possuiGraduacao = false
// var possuiDoutorado = true

// if(!possuiGraduacao){
//     console.log('Não possui graduação')
// }

// /* Exemplo 04 */
// var x = 10
// console.log(x === 10)
// console.log(x !== 10)

// /* Exemplo 05 */
// if((5 - 5) && (5 + 5)){
//     console.log('Verdadeiro')
// } else {
//     console.log('Falso')
// }

// if((5 - 5) || (5 + 5)){
//     console.log('Verdadeiro')
// } else {
//     console.log('Falso')
// }

// /* Exemplo 06 */
// var corFavorita = 'Azul'
// switch (corFavorita){
//     case 'Azul':
//         console.log('Olhe para o céu')
//         break
//     case 'Amarelo':
//         console.log('Olhe para o sol')
//         break
//     case 'Verde':
//         console.log('Olhe para a floresta')
//         break
//     default:
//         console.log('Feche os olhos')
// }

/* >>> Exercicios <<< */

// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade1 = 10
var idade2= 18
if (idade1 > idade2){
    console.log(`${idade1} é menor que ${idade2}`)
} else if (idade1 < idade2){
    console.log(`${idade2} é maior que ${idade1}`)
} else if(idade1 === idade2){
    console.log('as idades são iguais')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var diferenca= china - brasil
console.log(`A China tem ${china} milhoes de habitantes, ${diferenca} milhoes a mais que o Brasil que conta com apenas ${brasil} milhoes`)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}