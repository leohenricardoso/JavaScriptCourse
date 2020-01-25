/*
=> Juntando dois array
*/
const filhas = ['Maria', 'Joaquina']
const filhos = ['Giovanni', 'David']
const todos = filhas.concat(filhos) //Juntando dois array
const todos2 = filhas.concat(filhos, 'Fulano') //Juntando dois array e passando mais um dado para ser concatenado

console.log(todos)
console.log(todos2)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) //concatenando varios dados tipo array



//Output:
/*
[ 'Maria', 'Joaquina', 'Giovanni', 'David' ]
[ 'Maria', 'Joaquina', 'Giovanni', 'David', 'Fulano' ]
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
*/