//function scope
let subject/*  = 'create video' sem esse argumento, ele fica undefined*/

function createThink(){ //se tirar esse parametro, o programa lerá apenas o que está na função
    subject = 'study'
    return subject//sem esse retorno, volta undefined
}

console.log(subject) //aqui ele passa o argumento do primeiro
createThink() //aqui chama o que está DENTRO da função e sobrescreve
console.log(subject)//esse muda para o da função, porque a função está escrita SEM ARGUMENTO


//outro exemplo
let danca = 'dança do ventre'

function vamosDancar(danca){
    danca = 'axé'
    return danca
}

console.log(danca) //aqui ele passa o argumento do primeiro
console.log(vamosDancar(danca))
console.log(danca)