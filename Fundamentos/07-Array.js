/*
 => Em JavaScript os array são bem maleáveis.
 => Podemos ter varios tipos de dados em um array
 => Arrays em JS são object
*/

const valores = [8.0, 9.5, 13, 15.7] // Criando o array

console.log(valores[0], valores[3])

valores[4] = 10 // Colocando dado em um indice específico

console.log(valores)
console.log(valores.length) // Ver tamanho do array

valores.push({id: 3}, false, null, 'teste') // Adicionar dados no final do array
console.log(valores)

console.log(valores.pop()) // Tira o ultimo dado do array e retorna-o
console.log(valores)

delete valores[0] // Deleta dados de um determinado indice, deixando-o vazio
console.log(valores)

console.log(typeof valores) // Array em javascript são object


//Output:
/*
8 15.7
[ 8, 9.5, 13, 15.7, 10 ]
5
[ 8, 9.5, 13, 15.7, 10, { id: 3 }, false, null, 'teste' ]
teste
[ 8, 9.5, 13, 15.7, 10, { id: 3 }, false, null ]
[ <1 empty item>, 9.5, 13, 15.7, 10, { id: 3 }, false, null ]
object
*/