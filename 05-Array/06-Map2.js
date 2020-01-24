/*
=> Exercicio: Retornar um array apenas com os preços
*/

//Maneira 1:            Retornando um array de objeto preço
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

let array = Object.keys(carrinho).map(i => JSON.parse(carrinho[Number(i)]))

let resultado = array.map(e => {
    return {
        'preco': e.preco
    }
})

console.log(resultado)

//Maneira 2:        Retornando um array somente com os valores dos items
const paraObj = json => JSON.parse(json)
const price = produto => produto.preco

const res = carrinho.map(paraObj).map(price)
console.log(res)

//Output:
/*
[ { preco: 3.45 }, { preco: 13.9 }, { preco: 41.22 }, { preco: 7.5 } ]
[ 3.45, 13.9, 41.22, 7.5 ]
*/