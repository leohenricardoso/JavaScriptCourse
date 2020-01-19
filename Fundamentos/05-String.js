/*
=> Temos em JavaScript muitas funções que são atribuidas as strings
*/

//Parte 1
const job = "Developer" // Atribuindo o texto Developer a constante job

console.log("Parte 1: ")
console.log(job.charAt(3)) // Pega o caractere exato do index do parâmetro
console.log(job.charAt(20)) // Caso o index desejado não exista, o JavaScript não reporta nenhum erro, apenas mostra vazio
console.log(job.charCodeAt(3)) // Pega o codigo da tabela ASCII a qual o caractere se refere
console.log(job.indexOf('r')) // Retorna o index da letra r, caso seja uma letra que se repete no codigo
console.log(job.substring(1)) // Retorna a string começando pelo index indicado
console.log(job.substring(1, 6)) // Retorna a string entre os indexes passados como parametro
console.log('Job: '.concat(job).concat('!')) // Concatena as strings
console.log(job.replace('r', 'r!')) // Sbustitui uma string por outra
console.log('Leonardo,João,Maria,Amanda'.split(',')) // Transforma uma string em array, nesse caso usando a virgula como separador
console.log('Job: ' + job) // Outra maneira de concatenar duas ou mais strings

//Output parte 1:
/*
e

101
8
eveloper
evelo
Job: Developer!
Developer!
[ 'Leonardo', 'João', 'Maria', 'Amanda' ]
Job: Developer
*/

//Parte 2:
console.log("\nParte 2: ")