/**
 * Escreva uma função que recebe uma temperatura em Celsius e retornar esse valor em Fahrenheint
Formula: (0 °C × 9/5) + 32 = 32 °F
 */

function converte(){

    let celsius = 30
    let fahrenheit = (9* celsius/5) + 32

    console.log(" ")
    console.log("**FAHRENHEIT**")  
    console.log(`A temperatura em Fahrenheit é ${fahrenheit}°F.`)
}

converte();

module.exports = {converte}