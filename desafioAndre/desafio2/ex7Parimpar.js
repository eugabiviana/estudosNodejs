//Escreva uma função que recebe um array de números e retornar quantos números são pares e quantos são ímpares.

function paresEImpares(){
    let array = [ 9, 24, 5, 87, 32, 1, 99, 44]
    let pares = 0
    let impares = 0

    for(let i = 0; i<array.length; i++){   
        if(array[i]%2 == 0){
            pares++         
            
        } else {
            impares = array.length - pares
            
        }
        
    }
    console.log(" ")
    console.log("**QUANTIDADE DE NÚMEROS PARES E ÍMPARES**")
    console.log(`No array [${array}], temos:`)
    console.log(`A quantidade de números pares é de ${pares}`)
    console.log(`A quantidade de números ímpares é de ${impares}.`)
}

paresEImpares();

module.exports = {paresEImpares}