// /* Exemplo 01 LENGTH */
// const comida = 'Pizza'
// const frase = 'A melhor comida'
// const agua = new String('Água')

// console.log(`length: ${comida.length}`)
// console.log(`A primeira letra da frase 'A melhor comida' é: ${frase[0]}`)
// console.log(`A ultima letra da frase 'A melhor comida' é: ${frase[frase.length -1]}`)

// /* Exemplo 02 CHARAT */
// console.log(`A primeira letra da frase 'A melhor comida' é: ${frase.charAt(0)}`)
// console.log(`A ultima letra da frase 'A melhor comida' é: ${frase.charAt(frase.length -1)}`)

// /* Exemplo 03  CONCAT */
// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';

// const fraseFinal = frase.concat(linguagem, '!!');
// console.log(fraseFinal)

// /* Exemplo 04 INCLUDES */
// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// listaFrutas.includes(fruta); // true
// fruta.includes(listaFrutas); // false

// /* Exemplo 05 ENDSWITH e STARTSWITH */
// fruta.endsWith('nana'); // true
// fruta.startsWith('Ba'); // true
// fruta.startsWith('na'); // false

// /* Exemplo 06 SLICE */
// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// transacao1.slice(0, 3); // Dep
// transacao2.slice(0, 3); // Dep
// transacao3.slice(0, 3); // Tax

// transacao1.slice(12); // cliente
// transacao1.slice(-4); // ente
// transacao1.slice(3, 6); // ósi

// /* Exemplo 07 SUBSTRING */
// const linguagem2 = 'JavaScript';

// linguagem2.substring(3,5); // aS
// linguagem2.substring(0,4); // Java
// linguagem2.substring(4); // Script
// linguagem2.substring(-3); // JavaScript

// /* Exemplo 08 INDEXOF e LASTINDEXOF*/
// const instrumento = 'Guitarra';

// instrumento.indexOf('r'); // 5
// instrumento.lastIndexOf('r'); // 6
// instrumento.indexOf('ta'); // 3

// /* Exemplo 09 PADSTART e PADEND */
// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// listaPrecos[0].padStart(10, '.'); // .....R$ 99
// listaPrecos[0].padEnd(10, '.');   // R$ 99.....

// /* Exemplo 10 REPEAT */
// const frase2 = 'Ta';

// frase.repeat(5); // TaTaTaTaTa

// /* Exemplo 11  REPLACE */
// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43'

// /* Exemplo 12 SPLIT */
// const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// const arrayItens = listaItens.split(' ');

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');

// /* Exemplo 13 TOUPPERCASE e TOLOWERCASE */
// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// (sexo1.toLowerCase() === 'feminino'); // true
// (sexo2.toLowerCase() === 'feminino'); // true
// (sexo3.toLowerCase() === 'feminino'); // true

// /* Exemplo 14 TRIM, TRIMSTART e TRIMEND */
// const valor = '  R$ 23.00   ' 

// valor.trim(); // 'R$ 23.00'
// valor.trimStart(); // 'R$ 23.00   '
// valor.trimEnd(); // '  R$ 23.00'

/* >>> Exercicios <<< */
// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let totalTaxa = 0
  let totalRecebimento = 0
  transacoes.forEach((item) => {
    if (item.descricao.startsWith('Taxa')){
        totalTaxa += parseFloat(item.valor.slice(2))
    } else if (item.descricao.startsWith('Recebimento')) {
        totalRecebimento += parseFloat(item.valor.slice(2))
    }
})
console.log(`Taxa total: R$ ${totalTaxa}`)
console.log(`Recebimento total: R$ ${totalRecebimento}`)

  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// Substitua todos os span's por a's
const htmlText =  
`<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

const htmlArray = htmlText.split('span')
const newHtmlText = htmlArray.join('a')
console.log(newHtmlText)
  
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length -1])
// ou 
console.log(frase.charAt(frase.length -1))

// Retorne o total de taxas
const transacoesArray = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxas = 0
transacoesArray.forEach((item) => {
    const itemFormatado = item.toLowerCase().trimStart()
    if (itemFormatado.includes('taxa') === true){
      taxas += 1
    }
  })
console.log(`Existem ${taxas} taxas neste Array`)
  