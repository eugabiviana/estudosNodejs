// Escreva uma função que recebe um número e retorne seu antecessor

function antecessor(){
    let num1 = 15
    let antecessor = num1 - 1

    console.log(" ")
    console.log("**NÚMERO QUE ANTECEDE**")  
    console.log(`O número que antecede o ${num1} é o ${antecessor}.`)
}
antecessor()

module.exports = {antecessor}