/*
=> Operadores ternários
=> Como usar ====>          condição ? return true : return false
*/

const result = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Função com operador ternário
console.log(result(7.5))
console.log(result(6.8))


let nota = 7
const situacao = nota >= 7 ? 'Aprovado' : 'Reprovado' // Variavel/Constante recebendo um operador ternário
console.log(situacao)

//Output:
/*
Aprovado
Reprovado
Aprovado
*/