/*
=> Destructuring em arrays
*/

const [a] = [10] // Atribuindo o valor 10 ao a
console.log(a)

const [b, c, , d, e, f = 0] = [10, 12, 25, 5] // Destruturing varios elementos de uma só vez, observe que depois de c ele ignora um indice
console.log(b, c, d, e, f)


const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // Destructuring array de array, observe os casos em que ele está ignorando algo
console.log(nota)

//Output:
/*
10
10 12 5 undefined 0
6
*/