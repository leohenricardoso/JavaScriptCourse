/*
=> A função reduce acumula os dados de um determinado array
=> Reduce tem a função de agregar(juntar) todos os dados em um só
=> acumulador = dados já somados anteriormente
=> atual = dado atual que irá ser acumulado
=> Se quiser, pode passar após passar o acumulador e o atual, um valor inicial.
*/
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))    // Ver todas as notas de todos os alunos

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}) //Caso quisesse passar um valor inicial para essa acumulação, deveria passar após fechar a function callback

console.log(resultado)
//Output:
/*
[ 7.3, 9.2, 9.8, 8.7 ]
7.3 9.2
16.5 9.8
26.3 8.7
35
*/