/*
 => Métodos mais comuns usados em arrays
*/
const jogadores = ['C. Ronaldo', 'Neymar', 'Messi', 'Pelé']

jogadores.pop() //Removes the last element from an array and returns it.
console.log(jogadores)

jogadores.push('Ronaldinho') //Appends new elements to an array, and returns the new length of the array.
console.log(jogadores)

jogadores.shift() //Removes the first element from an array and returns it.
console.log(jogadores)

jogadores.unshift('Kaka') //Adiciona ao inicio
console.log(jogadores)

jogadores.splice(1, 1, 'Xavi') //Tira do array e coloca outro caso passe em parametro novo dado
console.log(jogadores)

const players = jogadores.slice(2) // Retorna o array a partir do indice indicado no parametro
console.log(players)

const players2 = jogadores.slice(0, 3) //Retorna um array do primeiro parametro até o segundo parametro
console.log(players2)




//Output:
/*

*/