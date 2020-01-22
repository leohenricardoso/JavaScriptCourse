/*
=> Object é uma função instanciada.
*/

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente())

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto())

//Output:
/*
function
object
function
object
function
object
*/