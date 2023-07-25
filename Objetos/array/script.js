// /* Exemplo 01 */
// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul

// /* Exemplo 02 */
// const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
// const carros = new Array('Corola', 'Mustang', 'Honda');

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';
// carros.length; // 11

// /* Exemplo 03 */
// let li = document.querySelectorAll('li'); // NodeList
// li = Array.from(li); // Array

// const carros = {
//   0: 'Fiat',
//   1: 'Honda',
//   2: 'Ford',
//   length: 4,
// }

// const carrosArray = Array.from(carros);

// /* Exemplo 04 */
// let li2 = document.querySelectorAll('li'); // NodeList
// Array.isArray(li2); // false

// li = Array.from(li2); // Array
// Array.isArray(li2); // true

// /* Exemplo 05*/
// Array.of(10); // [10]
// Array.of(1,2,3,4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(5); // [,,,,]
// Array(1,2,3,4); // [1,2,3,4]

// /* Exemplo 06 */
// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// frutas.length; // 3

// frutas[0].length; // 6
// frutas[1].length; // 4
// frutas[2].length; // 2

// /* Exemplo 07 */
// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();
// instrumentos; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]

// /* Exemplo 08 */
// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // 5
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros.push('Ferrari'); // 6
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// /* Exemplo 09 */
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros.shift(); // 'Ford'
// carros; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // 'Honda'
// carros; // ['Fiat', 'VW'];

// /* Exemplo 08 */
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

// /* Exemplo 09 */
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// carros.splice(1, 0, 'Kia', 'Mustang'); // []
// carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// /* Exemplo 10 */
// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']

// /* Exemplo 11 */
// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']

// /* Exemplo 12 */
// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// // ['Barco', 'Aviao', 'Carro', 'Moto'];

// const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

// /* Exemplo 13 */
// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// linguagens.includes('css'); // true
// linguagens.includes('ruby'); // false
// linguagens.indexOf('python'); // 4
// linguagens.indexOf('js'); // 2
// linguagens.lastIndexOf('js'); // 5

// /* Exemplo 14 */
// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

// /* Exemplo15 */
// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// linguagens.slice(3); // ['php', 'python']
// linguagens.slice(1, 4); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens.slice();

/* >>> Exercicios <<< */
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas)

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift()
console.log(primeiraComida, comidas)

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop()
console.log(ultimaComida, comidas)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')
console.log(comidas)

/* -------------------------------------------------------------------------------- */
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
console.log(estudantes)

// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)

// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

/* -------------------------------------------------------------------------------- */
let html =`
<section>
  <div>Sobre</div>
  <div>Produtos</div>
  <div>Contato</div>
</section>`
// Substitua section por ul e div com li, utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover salve a array original em outra variável
const cloneCarros = carros.slice()
carros.pop()
console.log(cloneCarros, carros)