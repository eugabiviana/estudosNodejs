// estrutura de dados?

//array (arranjo): recupero os dados através de um index
// - vetores
// - matrizes
//pilha
//fila
//árvore
//hashmap ou dicionário
//heap

/*Diferença entre o let e const:
- let: permite alteração do valor da variável após ela ter sido declarada;
- const: "bloqueia" o valor da variável, inviabilizando sua modificação após o valor ter sido declarado.
*/

let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr[3] = 4
console.log(arr[0]);//pegar o primeiro elemento do array
console.log(arr[arr.length -1]); //pegar o ultimo elemento do array
console.log(arr.length)
// vertores são arrays de uma unica dimensão. 
// ex: | 1 | 2 | 3 | <- é um vetor pq eu estou armazenando em uma unica dimensao, o que 
//implica que eu preciso apenas de um index pra acessar.

let matriz = []
matriz.push([1,2,3])
matriz.push([4,5,6])
matriz.push([7,8,9]) 
console.log('matriz.length', matriz.length)
console.log('matriz[0]', matriz[0])
let vetor1 = matriz[0]   //( vetor1 )[2]
console.log('matriz[0]', (matriz[1])[2])
// | 1 | 2 | 3 |
// | 4 | 5 | 6 |
// | 7 | 8 | 9 |

let matriz3d = []
matriz3d[0] = matriz
console.log(matriz3d[0][1][2])

//estrutura de repetições
// - for
// - foreach
// - while
// - do while
//i = i+1 = i++ 

//for(como o for inicia; condicao de parda do for; o q o for irá fazer no fim de cada iteracao)
//o i é a variavel de controle da estrutura de repetição
for(let i = 0; i < arr.length; i++){
  //inicio
  // o que tiver aqui dentro será repetido
  console.log(`arr[${i}]`, arr[i])
  //fim
}

//ex: digamos q eu queira imprimir um mensagem com o index dos elementos pares do array.
let arr2 = [3,4,5,7,9,2,8,6]
for(let i = 0; i < arr2.length; i++){
  if(arr2[i]%2 == 0)
    console.log(`o elemento de index ${i} eh par`)
}

//ex: digamos q eu queira parar quando encontrar o primeiro numero par e imprimir o index desse elemento.
for(let i = 0; i < arr2.length; i++){
  if(arr2[i]%2 == 0){
    console.log(`o primeiro elemento par eh o de index ${i}`)
    break; //ele interrompe imediatamente a estrutura de repeticao
  }
}

//ex: quero imprimir todos os numeros pares que sejam maior q 4.
// for(let i = 0; i < arr2.length; i++){
//   if(arr2[i]%2 == 0 && arr2[i] > 4){
//     console.log(`o elemento ${arr2[i]} eh par`)
//   }
// }

for(let i = 0; i < arr2.length; i++){
  if(arr2[i] <= 4){
    continue //faz com q o for volte para o inicio
  }
  console.log(`${i}`)
  if(arr2[i]%2 == 0){
    console.log(`o elemento ${arr2[i]} eh par`)
  }
}

