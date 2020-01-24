/*
=> Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).
Nesse caso, em muitas outras linguagens daria erro ao compilar, porém em JavaScript, o compilador move a declaração das variaveis para o topo do código
mesmo sem atribuir valor a ela. Ao invés de dar erro de variavel não definida na compilação, a variavel antes de receber algum valor recebe o valor de undefined.
*/

console.log('a = ', a)
var a = 2
console.log('a = ', a)

//O código final para o compilador fica dessa maneira:
/*
var a;
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/

//Output:
/*
a =  undefined
a =  2
*/