/**
 * Escreva uma função que recebe um valor e calcula a porcentagem de desconto baseado na tabela abaixo:
Valor	% de desconto
Até R$500,00	Sem desconto
De 500,01 até 1000,00	3%
A Partir de 1000,01	5%
 */
function porcentagem(){
    let num1 = 2000
    let porcentagem = 0
    
    if(num1 <= 500){
        console.log(" ")
        console.log("**PORCENTAGEM**")        
        console.log(`Sem desconto. O valor final é: ${num1}`)
    
    } else if(num1 >= 500.01 && num1 <= 1000){
        porcentagem = num1 - (num1 * 0.03) 
    
        console.log(" ")
        console.log("**PORCENTAGEM**")  
        console.log(`O valor final de ${num1} com 3% de desconto é: ${porcentagem}`)
    
    }else if (num1 >= 1000.01){
        porcentagem = num1 - (num1 * 0.05) 
        console.log(" ")
        console.log("**PORCENTAGEM**")  
        console.log(`O valor final de ${num1} com 5% de desconto é: ${porcentagem}`)
    }
}
porcentagem()

module.exports = {porcentagem}