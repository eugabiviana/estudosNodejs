//function expression
//function annonymous (sem nome declarado)
//Se eu passar os parametros FORA da função, esse código aqui não será o suficiente.
// const sum = function(number1, number2){
// console.log(number1 + number2)
// }

// sum(2, 3) //passando argumentos

// //Para passar novos números, será assim:
const sum = function(number1, number2){
   let total = number1 + number2   
   return total
   
    }
   sum(2, 3) //por que esse não funciona nesse caso? ¬¬'

    let number1 = 34
    let number2 = 25
    sum(number1, number2)

    console.log(`O número 1 é o ${number1}`)
    console.log(`O número 2 é o ${number2}`)
    console.log(`A soma entre eles é igual a: ${sum(number1, number2)}`)
    