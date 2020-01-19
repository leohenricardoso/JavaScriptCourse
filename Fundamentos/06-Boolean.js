/*
=> Tipos de dados boolean em JavaScript, além de poder usar true e false, também podemos usar 0 e 1 e outros tipos de dados,
diferente de muitas outras linguagens de programação
=> No bloco de Tipos verdadeiros, podemos ver todos os tipos que o JavaScript encara como verdadeiros.
Valem lembrar que todos os números, com excessão do zero são verdadeiros, os números passados ali são apenas alguns exemplos
*/

let isAtivo = false;
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // Colocando uma negação, ele inverte de true para false, nesse caso ele transforma o literal 1 em boolean
console.log(!!isAtivo) // Colocando duas negações ele retorna o valor atual, no caso, true

console.log('\nTipos verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nTipos falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nOperação lógica:')
console.log(!!('' || null || 0 || 'opa')) // Nesse caso, apenas o 'opa' é verdadeiro, porém ele retorna true

let nome = ''
console.log(nome || 'Desconhecido') //Como o nome é vazio, ele retorna falso, mas como Desconhecido é true ele printa Desconhecido

//Output:
/*
false
true
false
true

Tipos verdadeiros:
true
true
true
true
true
true
true
true

Tipos falsos:
false
false
false
false
false
false

Operação lógica:
true
Desconhecido
*/