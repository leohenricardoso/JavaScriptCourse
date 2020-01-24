/*
=> Criando nosso proprio map
*/

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObj = json => JSON.parse(json)
const price = produto => produto.preco

const res = carrinho.map2(paraObj).map2(price)
console.log(res)

//Output:
/*
[ 3.45, 13.9, 41.22, 7.5 ]
*/