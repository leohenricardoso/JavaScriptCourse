/*
=> Map faz uma transformação de um array para outro array de mesmo tamanho
*/
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(nums, resultado)

//Arrow functions
const soma10 = e => e + 10
const triplo = e => e * 3
const money = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(money) //Transformação sucessiva
console.log(nums, resultado)
//Output:
/*

*/