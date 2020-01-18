/*
Trabalhando com números em JavaScript
*/

const peso1 = 1.0
const peso2 = Number('2.0') // Transforma uma string em number

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) //Verifica se o dado do parametro é inteiro e retorna true ou false
console.log(Number.isInteger(peso2)) //No JavaScript, mesmo que tenha passado valor x.0 ele encara como numero inteiro. Se fosse x.1 por exemplo, já seria um dado do tipo float

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //Limita a quantidade de casas depois da virgula que ira ser exibida
console.log(media.toString()) //Transaforma um tipo de dado em string
console.log(typeof media) //Mostra o tipo do dado

//Algumas anotações:
console.log("Alguma anotações:")
/*
=> JavaScript tem o tipo de dado infinity, geralmente quando dividimos algum número por 0
*/
console.log(7/0)

/*
=> Podemos também dividir uma string numérica por um número ou por outra string numérica
*/
console.log("10.1" / 2)

/*
=> Algumas operações com numeros float podem ser imprecisas. Isso ocorre por que o JS busca velocidade, caso fosse deixar 100& preciso, perderia em performance
*/
console.log(0.1 + 0.7)

console.log((10).toString()) //Nesse caso precisamos colocar o número literal dentro de parenteses
console.log((10.456).toFixed(2)) //Nesse caso precisamos colocar o número literal dentro de parenteses


//Output:
/*
1 2
true
true
7.8709999999999996
7.87
7.8709999999999996
number
Alguma anotações:
Infinity
5.05
0.7999999999999999
10
10.46
*/