/*
=> O array é um objeto em JavaScript
=> É uma estrutura heterogenea, mas é uma boa prática usálo homogeneo
*/
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Ana', 'Carlos') //Uma maneira de criar um array
console.log(aprovados)


aprovados = ['João', 'Leonardo', 'Arthur'] //Uma maneira de criar um array
console.log(aprovados)

console.log(aprovados[0]) //Acessando um dado especifico do array

aprovados[3] = 'Maria' //Uma maneira de inserir um dado em um indice especifico do array
aprovados.push('Beatriz') //Inserindo um dado na ultima posição do array

console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() //Ordernação do array
console.log(aprovados)


aprovados[10] = 'Teste' //Inserindo um valor em um indice de maneira que ficará espaços vazios no meio
aprovados.sort() //Ordenando o array
console.log(aprovados)
aprovados.push('Anderson') //Inserindo um dado na ultima posição do array
console.log(aprovados)

delete aprovados[1] //Deletando dado de um indice (Não ordena sozinho o array)
console.log(aprovados[1])
aprovados.sort() //Ordenando o array
console.log(aprovados)

let reprovados = ['Julia', 'Amanda', 'Ana'] //Criando outro array para explicar a função splice
console.log(reprovados)
//reprovados.splice(1, 2) // ['Julia'] => Deleta 2 indices começando do indice 1
//reprovados.splice(1, 2, 'Nome 1', 'Nome 2') // [ 'Julia', 'Nome 1', 'Nome 2' ] => Deleta 2 indices começando do indice 1 e adiciona dois dados no seu lugar
//reprovados.splice(1, 1, 'Nome 1', 'Nome 2') // [ 'Julia', 'Nome 1', 'Nome 2', 'Ana' ] => Deleta 1 indice começando do indice 1 e adiciona dois dados no seu lugar
//reprovados.splice(1, 0, 'Nome 1', 'Nome 2') // [ 'Julia', 'Nome 1', 'Nome 2', 'Amanda', 'Ana' ] => Não deleta nenhum indice, porém insere novos dados a partir do indice 1
console.log(reprovados)





//Output:
/*
function object object
[ 'Bia', 'Ana', 'Carlos' ]
[ 'João', 'Leonardo', 'Arthur' ]
João
5
[ 'João', 'Leonardo', 'Arthur', 'Maria', 'Beatriz' ]
[ 'Arthur', 'Beatriz', 'João', 'Leonardo', 'Maria' ]
[
  'Arthur',
  'Beatriz',
  'João',
  'Leonardo',
  'Maria',
  'Teste',
  <5 empty items>
]
[
  'Arthur',
  'Beatriz',
  'João',
  'Leonardo',
  'Maria',
  'Teste',
  <5 empty items>,
  'Anderson'
]
undefined
[
  'Anderson',
  'Arthur',
  'João',
  'Leonardo',
  'Maria',
  'Teste',
  <6 empty items>
]
[ 'Julia', 'Amanda', 'Ana' ]
[ 'Julia', 'Amanda', 'Ana' ]
*/