/*
=> Aqui podemos ver o básico de variaveis e constantes (var, let e const)
=> var pode ser redeclarado varias vezes no mesmo bloco de código, sempre irá sobrescrever o valor.
=> let você só pode atribuir novos valores para essa variavel, não pode declarar duas vezes a mesma variavel no mesmo bloco de código,
diferente de var que pode.
=> Sempre priorize utilizar let, só use var caso seja realmente necessário.
=> No caso de constante, só pode ser declarada e receber um valor apenas uma vez.
*/

var a = 3
let b = 5
const c = 'constante'

var a = 30
//let b = 20 =======> isso daria erro "Identifier 'b' has already been declared"
b = 20
console.log(a, b)


//c = 5 => isso daria erro "Assignment to constant variable."
console.log(c)

//Output:
/*
30 20
constante
*/