//o JS trabalha em cascata:
//var é global e também local

//var x <- o programa entende que a variável está aqui em cima, mas sem valor
console.log('>existe x antes do bloco? ', x) //aqui aparece indefinido, porque x é criado APÓS o print. ela aparece como indefinido, porque o programa entende que ela já existe, mas sem valor

{
    var x = 0
}

console.log('>existe x antes do bloco? ', x) //aqui já tem valor, porque o programa passou pelo bloco e leu a variável com o valor atribuído.

//let e const

//console.log('>existe y antes do bloco? ', y) //por ser let, o programa não reconhece como variável pré-existente indefinida, dá erro na leitura
//aqui fora é o escopo GLOBAL
let y = 1;
{//esse é o escopo local
    let y = 0
    console.log('>existe y? ', y) //o programa só lê se colocar depois da inicialização do y. se escrever esse código antes, dará erro.
}

console.log('>existe y depois do bloco? ', y) //aqui também dá erro, pois let e const só são lidos DENTRO do escopo local, ou se for criado no escopo GLOBAL.

/**
 * Se eu escrever:
 * 
 * let y = 1;
{
    y = 0
    console.log('>existe y? ', y)
}

console.log('>existe y depois do bloco? ', y)

o y de fora mudará de valor, porque eu atualizei o valor dele DENTRO do escopo. O mesmo NÃO acontece com o const, ele dá erro.
Para funcionar com o const, eu devo criar uma nova variável em outro escopo e que pode ter o mesmo nome. 
    Ex.:

    const y = 1;
    {
        {
            {
                const y = 3
                console.log('>existe y? ', y) // esse valor só será mudado aqui dentro, fora do escopo, seguirá o declarado no início.
            }
        }
    }

    console.log('>existe y depois do bloco? ', y)
 */