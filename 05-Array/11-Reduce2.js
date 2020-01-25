/*
=> Exercicio usando reduce
*/
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //Todos os resultados tem que ser true para returnar true
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) //"Soma" todos os resultados (booleans), caso todos forem verdadeiros, retorna true

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // Se um resultado for verdadeiro, retorna true
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) //"Soma" todos os resultados (booleans), caso algum for verdadeiro, retorna true

//Output:
/*
false
true
*/