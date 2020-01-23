/*
=> Destructuring usando array em functions
*/

function rand([min = 0, max = 500]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Passando os valores min e max
console.log(rand([992])) // Passando apenas o valor min
console.log(rand([, 10])) // Passando apenas o valor max
console.log(rand([])) // Passando os parametros vazios

//Output:
/*
49
854
3
491
*/