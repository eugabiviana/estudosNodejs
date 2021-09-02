//function hoisting

sayMyName()

function sayMyName(){
    console.log('Gabi')
}

//O JS entende essa ordem para função. Nesse caso funciona, mas se for escrito como abaixo, usando variável, dará erro de referência!

// const sayMyName = function sayMyName(){
//     console.log('Gabi')
// }