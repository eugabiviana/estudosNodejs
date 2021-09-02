/*Função é um liquidificador
    - processo de um suco: joga as frutas no liquidificador, bate e no final sai a mistura dos ingredientes no copo.
*/
function fazerSuco(fruta1, fruta2){//<-- isso é parâmetro
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã') //<- isso é argumento

console.log(copo)