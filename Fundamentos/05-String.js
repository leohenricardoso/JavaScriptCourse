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
/*
=> Usando Template string para concatenar dados e formatar texto.
=> Um template string é delimitado por ( ` ) = Acento grave
*/
console.log("\nParte 2: ")

const name = 'Rebeca' //Variavel para ser usada no exemplo

const concatenacao = 'Olá, ' + name + '!' // Forma antiquada de concatenar

const template = `Olá ${name}!` // Usando template string, podemos chamar a variavel dentro da delimitação do template (Todos os espaços serão usados => ex: Espaço entre "Olá" e "${name}")

const template2 = `
    Olá ${name}!
    Tudo bem?` //Nesse caso ele levará consideração na quebra de linha

console.log('Concatenação: ', concatenacao)
console.log('Template: ', template)
console.log('Template2: ', template2)

// => Podemos também chamar funções dentro de um template string
const up = txt => txt.toUpperCase() //Função arrow, recebe um texto e retorna ele com uppercase
console.log(`Hey.. ${up('cuidado!')}`) // Usando função dentro do template string


//Output:
/*
Parte 2:
Concatenação:  Olá, Rebeca!
Template:  Olá Rebeca!
Template2:
    Olá Rebeca!
    Tudo bem?
Hey.. CUIDADO!
*/