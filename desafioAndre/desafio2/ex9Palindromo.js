//Escreva uma função que recebe uma palavra e retorno se a mesma é Palíndromo

function palindromo(){

    let palavra = 'Casa'
    let palavraInversa = 'asaC'        

        if(palavra == palavraInversa){
            console.log(" ")
            console.log("**PALÍNDROMO**") 
            console.log(`O inverso de ${palavra}, é ${palavraInversa}. Então ${palavra} é palíndromo!`)

        } else {
            console.log(" ")
            console.log("**PALÍNDROMO**") 
            console.log(`O inverso de ${palavra}, é ${palavraInversa}. Então ${palavra} não é palíndromo!`)
        }
}

palindromo();

module.exports = {palindromo}


/* Método do js:        
    if (palavra == palavra.split().reverse().join()) {
    
    console.log(`O inverso de ${palavra}, é ${palavraInversa}. Então ${palavra} é palíndromo!`);

    } else {
        
        console.log(`O inverso de ${palavra}, é ${palavraInversa}. Então ${palavra} não é palíndromo!`)
    } 
    
Explicação:
Primeiro com a função split(), transforma uma string em um array. Tendo um array, posso utilizar a função reverse(), que inverte a ordem dos elementos de uma array. E por último, utiliza a função join(), que junta os elementos de um array em uma string.
*/