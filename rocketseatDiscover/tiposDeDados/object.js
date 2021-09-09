/**
 * Object
 *     * propriedades / atributos / características
 *     * funcionalidades / métodos
 * 
 * Como escrever um objeto:
 * { propriedade: "valor"}
 */

console.log({
    name: "Gabi",
    idade: 33,
    andar: function(){
        console.log('andar')
    }
})

const book = {
    name: "Frankenstein",
    author: "Mary Shelley",
    year: 1818
}

console.log(`O livro ${book.name} foi escrito por ${book.author} e teve sua primeira publicação em ${book.year}.`)

//Quando chamamos o nome do objeto com um ponto, estamos "abrindo a pasta do próximo nível". Assim, posso buscar a informação dessa área específica.