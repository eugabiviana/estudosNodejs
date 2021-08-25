//Escreva uma função que receba um valor de repetições e calcule a sequência de Fibonacci

function fibonacci(){
let arrayFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

for(let i = 0; i < arrayFibonacci.length; i++){
    if( arrayFibonacci[i] == arrayFibonacci[i + i] + arrayFibonacci[i]){
        console.log(arrayFibonacci[i])
    }
    
}
//arrayFibonacci[i + 1] = i + i

//console.log(sequencia2)

}

fibonacci();

module.exports = {fibonacci}