// /* Exemplo 01 */
// Number.isNaN(NaN); // true
// Number.isNaN(4 + 5); // false

// Number.isInteger(20); // true
// Number.isInteger(23.6); // false


// /* Exemplo 02 */
// parseFloat('99.50'); // Mesma função sem o Number
// Number.parseFloat('99.50'); // 99.5
// Number.parseFloat('100 Reais'); // 100
// Number.parseFloat('R$ 100'); // NaN

// parseInt('99.50', 10); // 99
// parseInt(5.43434355555, 10); // 5
// Number.parseInt('100 Reais', 10); // 100

// /* Exemplo 03 */
// const preco = 2.99;
// preco.toFixed(); // 3

// const carro = 1000.455;
// carro.toFixed(2) // 1000.46

// const preco2 = 1499.49;
// preco2.toFixed() // 1499

// /* Exemplo 04 */
// const preco3 = 2.99;
// preco3.toString(10); // '2.99'

// /* Exemplo 05 */
// const preco4 = 59.49;
// preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
// preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

// /* Exemplo 06 */
// Math.abs(-5.5); // 5.5
// Math.ceil(4.8334); // 5
// Math.ceil(4.3); // 5
// Math.floor(4.8334); // 4
// Math.floor(4.3); // 4
// Math.round(4.8334); // 5
// Math.round(4.3); // 4

// /* Exemplo 07 */
// Math.max(5,3,10,42,2); // 42
// Math.min(5,3,10,42,2); // 2

// Math.random(); // 0.XXX
// Math.floor(Math.random() * 100); // entre 0 e 100
// Math.floor(Math.random() * 500);  // entre 0 e 500

// // Número random entre 72 e 32
// Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;

/* >>> Exercicios <<< */
// Retorne um número aleatório entre 1050 e 2000
const min = 1050
const max = 2000
const aleatorio = Math.round(Math.random() * (max - min + 1)) + min
console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
const arrayNumeros = numeros.split(', ')
const maiorNumero = Math.max(...arrayNumeros)

console.log(maiorNumero)

// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let somaPreco = 0
function precoLimpo(preco) {
    listaPrecos.forEach((item) => {
        const itemLimpo = item.toUpperCase().replace('R$', '').replace(',', '.').trim()
        somaPreco += parseFloat(itemLimpo)
    })
    console.log(somaPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
}
precoLimpo()