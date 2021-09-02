/**
 * Function () constructor
 * 
 *  * expressão new
 *  * criar um novo objeto
 *  *this keyword 
 * 
 * Essas funções por padrão são criadas com letra maiúscula no início (boa prática).
 */

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando!"
    }
}
const gabi = new Person('Gabi')
const dani = new Person('Dani')
console.log(dani.walk())
console.log(gabi.walk())
