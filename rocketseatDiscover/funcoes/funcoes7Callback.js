//callback function: chama uma função dentro da outra

function sayMyName(name){

    console.log('Antes de executar a função callback')

    name()

    console.log('Depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('Estou na função callback')
    }
)

/** é o mesmo que:
 * function sayMyName(){

    console.log('Antes de executar a função callback')

    function name () => {
        console.log('Estou na função callback')
    }
    name()

    console.log('Depois de executar a função callback')
}

    sayMyName()
 * 
 */

