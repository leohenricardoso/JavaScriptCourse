/*
=> Objeto é uma coleção de chave e valor
=> Um objeto NÂO é um Json, mesmo que suas estruturas sejam parecidas.
=> Os atributos de um objetos podem ser criados dinamicamente.
*/

const prod = {} //Criando um objeto vazio

//Criando atributos para esse objeto e já atribuindo valores
prod.nome = 'Celular'
prod.valor = 2399.99
console.log(prod)

//Outra forma de criar atributo para um objeto
prod['Desconto'] = 99.00
console.log(prod)

//Criando um objeto já com atributos e valores
const prod2 = {
    nome: 'Relógio',
    valor: 279.90,
}
console.log(prod2)

//Criando um objeto com outros objetos dentro
const prod3 = {
    nome: 'Camiseta',
    valor: 79.90,
    cor: {
        id: 1,
        label: 'Vermelho',
        descricao: {
            id: 5,
            label: 'Essa camiseta é vermelho'
        }
    }
}
console.log(prod3)


//Output:
/*
{ nome: 'Celular', valor: 2399.99 }
{ nome: 'Celular', valor: 2399.99, Desconto: 99 }
{ nome: 'Relógio', valor: 79.9 }
{
  nome: 'Relógio',
  valor: 79.9,
  cor: {
    id: 1,
    label: 'Vermelho',
    descricao: { id: 5, label: 'Esse relógio é vermelho' }
  }
}
*/