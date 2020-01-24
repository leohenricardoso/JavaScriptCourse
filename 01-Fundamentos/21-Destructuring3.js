/*
=> Destructuring functions
*/

function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40})) //Chamada da função

const obj = {max: 50, min: 40} //Atribuindo-o a uma constante e usando-a depois
console.log(rand(obj))

console.log(rand({ min: 800})) // Pega o valor padrão de max

console.log(rand({})) //Pega os valores padrões

//Output:
/*
45
42
913
297
*/