// /* Exempllo 01 */
// var videoGames = ["Switch", "PS4", "Xbox", "3DS"]
// // console.log(videoGames[0])
// // console.log(videoGames[1])
// // console.log(videoGames[2])
// // console.log(videoGames)

// // /* Exemplo 02 */
// // var ultimoItem = videoGames.pop()
// // videoGames.push("3DS")
// // console.log(videoGames)

// /* Exemplo 03 */
// for (var i = 0; i <= 3; i++){
//   console.log(i)
// }

// /* Exemplo 04 */
// var i = 0
// while (i <= 3){
//   console.log(i)
//   i++
// }

// /* Exemplo 05 */
// var videoGames = ["Switch", "PS4", "Xbox", "3DS"]
// for(var i = 0; i < videoGames.length; i++){
//   console.log(videoGames[i])
// }

// /* Exemplo 06 */
// for (var i = 0; i < videoGames.length; i++){
//   console.log(videoGames[i])
//   if (videoGames[i] === "PS4"){
//     break
//   }
// }

// /*Exemplo 07 */
// var frutas = ["Limão", "Banana", "Maçã", "Laranja", "Abacaxi"]
// frutas.forEach(function(fruta, index) {
//   console.log(fruta, index)
// });

/* >>> Exercicios <<< */

// Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function(ano){
  console.log(`O brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i< frutas.length; i++){
  console.log(frutas[i])
  if (frutas[i] === "Pera")
  break
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)