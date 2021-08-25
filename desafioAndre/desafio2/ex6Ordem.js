/**
 *  Escreva uma função que recebe um array de números e retorne esse array ordenado:
Ex: [21 , 3 , 80 , 9, 10] > [3, 9, 10, 21, 80]

 */

function ordemAsc(){
  let array = [ 9, 24, 5, 87, 33, 1, 99]

  //não entendi a lógica dessa parte!
  function compararNumeros(a, b) {
    return a - b;
  }

  console.log(" ")
  console.log("**ORGANIZANDO O ARRAY**")
  console.log(`Array original: [ ${array} ]`)
  console.log(`Array ordenado: [ ${array.sort(compararNumeros)} ]`)
}

ordemAsc()

module.exports = {ordemAsc}