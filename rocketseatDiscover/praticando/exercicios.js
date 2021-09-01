//1.Declare uma variável de nome weight
let weight;

//2. Que tipo de dado é a variável?
console.log(typeof weight)

/*3. Declare uma variável e atribua valores para cada um dos dados:
    - name: string
    - age: Number(integer)
    - stars: Number (float)
    - isSubscribed: Boolean
*/

/* let name = "Gabi";
let age = 33;
let stars = 4.9;
let isSubscribed = true; */

/* *4. A variável student abaixo é de que tipo de dados? 
 * 
 * a) Atribua a ela as mesmas propriedades e valores do ex. 3.
 * 
 * b) Mostre no console a seguinte menasagem:
 * <name> de idade <age> pesa <weight> kg.  */


let student = {
    name : "Gabi",
    age: 33,
    weight: 71.5,
    isSubscribed:true
};
console.log(`Impressão do OBJETO student`)
console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)
console.log(` `)

/**
 * 5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
 */

// let students = [];
// console.log(students)

/**
 * 6. Reatribua valor para  avariável acima, colocando dentro dela o objeto student da questao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.)
 */

 let students = [
     student
 ]
 console.log(`Impressão do ARRAY students`)   
 console.log(students)
 console.log(` `)

 /**
  * 7. Coloque no console o valor da posição zero do Array acima.
  */

 console.log(`Impressão do ARRAY students[0]`)   
 console.log(students[0])
 console.log(` `)

/**
 * 8. Crie um novo student e coloque na posição 1 do Array students.
 */
const Dani = {
    name : "Dani",
    age: 32,
    weight: 65,
    isSubscribed:true
}

/* Reatribuindo o valor de students = [
    student,
    Dani
] ou posso escrever assim, sobrescrevendo: */
students[1] = Dani
console.log(students)

/**
 * 9. Sem rodar o código, responda qual é a resposta do código abaixo e porquê. Após sua resposta, rode o código e veja se você acertou.
 * 
 * console.log(a)
 * var a = 1
 * 
 * Resp: O código será undefined, porque a variável está sendo criada após o print.
 */

 console.log(a)
 var a = 1