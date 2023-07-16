// /* Exemplo 01 */
// var nome = 'Matheus'
// var idade = 18
// var simbolo = Symbol()
// console.log(typeof simbolo)

// /* Exemplo 02 */
// var nome = 'Matheus'
// var sobrenome = 'Ferreira'
// var nomeCompleto = nome + ' ' + sobrenome
// console.log(nomeCompleto);

// /* Exemplo 03 */
// var gols = 1000
// var frase = 'Romário fez ' + gols + ' gols'
// console.log(frase, typeof frase)

// /* Exemplo 04 */
// var ano = '2018'
// var mes = 8
// console.log(ano + mes)
// ERRO (Não ocorre soma apenas concatenação)

// /* Exemplo 05 */
// var frase1 = 'Esse é o "melhor" jogo'
// console.log(frase1)
// var frase2 = 'Esse é o \'melhor\' jogo'
// console.log(frase2)

// /* Exemplo 06 */
// var gols = 1000
// var frase1 = 'Romário fez ' + gols + ' gols'
// var frase2 = `Romário fez ${gols} gols` 
// console.log(frase1)
// console.log(frase2)

/* >>> Exercicios <<< */

// Declare uma variável contendo uma string
var nome = 'Matheus'
console.log (nome)

// Declare uma variável contendo um número dentro de uma string
var num = '213'
console.log(num)

// Declare uma variável com a sua idade
var idade = 18
console.log(idade)

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var sobrenome = 'Ferreira'
var nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)

// Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time'
console.log(frase)

// Verifique o tipo da variavel que contém seu nome
console.log(nome,  typeof nome)