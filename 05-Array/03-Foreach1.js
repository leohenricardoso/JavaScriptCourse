/*
=> método forEach
*/
const aprovados = ['Agda', 'Eduardo', 'Leonardo', 'Ana']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
//Output:
/*
1 - Agda
2 - Eduardo
3 - Leonardo
4 - Ana
1 - Agda
2 - Eduardo
3 - Leonardo
4 - Ana
Agda
Eduardo
Leonardo
Ana
Agda
Eduardo
Leonardo
Ana
*/