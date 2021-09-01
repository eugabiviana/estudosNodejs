//Praticando: variáveis e tipos de dados
// declaração/declaration
var name

//assignment/ atribuição de valores
name = "Gabi"

//que tipo de dado foi colocado
//console.log(typeof name)

//agrupamento de declarações
/**
 * é a mesma coisa de:
 * let age = 20
 * let isHuman = true
 */
let age, isHuman

age = 18
isHuman = true

//para usar vários argumentos no mesmo console.log, separa-se com vírgulas.
//console.log(name, age, isHuman)

//Interpolando valores
console.log(`A ${name} tem ${age} anos.`)

//Criando um objeto
const person = {
    name:'Dani',
    age: 32,
    weight: 65.5,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg.`)

//Array
const animals = [
    'Lion',
    'Monkey',
    {
        name:'Cat',
        age: 3
    }
]

//acessar valores do array
console.log(animals)

//acessar posição do array. 3 = 0, 1, 2
console.log(`Na primeira posição está o ${animals[0]}.`)

//verificando tamanho do array
console.log(`O array tem ${animals.length} elementos`)

//acessando objeto dentro do array
console.log(animals[2]) //se interpolar ou concatenar, não vai imprimir o valor do objeto. Por quê?
console.log(`O nome desse objeto é ${animals[2].name}.`)