/*
=> Criando nosso proprio reduce
*/
Array.prototype.reduce2 = function(callback, inicial) {
    const indice = inicial ? 0 : 1
    let acumulador = inicial || this[0]
    for (let i = indice; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma, 4))

//Output:
/*

*/