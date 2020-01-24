/*
=> O JavaScript é de tipagem fraca, ou seja, uma mesma variavel pode varias vezes durante ser mudada de tipo,
como ocorre no código abaixo
*/

let a = "Essa é uma string"
console.log(a)
console.log("Tipo de dado: ", typeof a)
console.log('-----------')

a = 563
console.log(a)
console.log("Tipo de dado: ", typeof a)
console.log('-----------')

a = 5.66
console.log(a)
console.log("Tipo de dado: ", typeof a)
console.log('-----------')


//Output:
/*
Essa é uma string
Tipo de dado:  string
-----------
563
Tipo de dado:  number
-----------
5.66
Tipo de dado:  number
-----------
*/