/* Escreva uma função que recebe um array de números e retorne esse array invertido
Ex: [1 ,2 ,3] > [3 , 2 ,1]
*/

function ordemDec(){
  let array = [ 9, 24, 5, 87, 33, 1, 99]

  //não entendi a lógica dessa parte!
  function compararNumeros(a, b) {
      return b - a;
  }

  console.log(" ")
  console.log("**ORGANIZANDO O ARRAY**")
  console.log(`Array original: [ ${array} ]`)
  console.log(`Array ordenado: [ ${array.sort(compararNumeros)} ]`)
}

ordemDec();

module.exports = {ordemDec}