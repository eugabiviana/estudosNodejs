//Escreva uma função que recebe um array de notas de alunos e calcule a média delas.

function media(){
    let notas = [6, 8, 9]
    let media = 0    

    for(let i = 0; i <notas.length; i++){
        media += notas[i]/notas.length
    }
    console.log(" ")
    console.log("**MÉDIA**")  
    console.log(`A média das notas é ${media}.`)
}

media();

module.exports = {media}