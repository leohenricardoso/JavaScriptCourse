/*
=> Criando nosso próprio filter
*/
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de platico', preco: 18.99, fragil: false }
]

const isFragil = produto => produto.fragil // Criando função arrow que retorna se o produto é fragil
const caro = produto => produto.preco >= 500 // Retorna os produtos com preço acima de 500

console.log(produtos.filter2(caro).filter2(isFragil)) // Usando a função filter sucessivamente

//Output:
/*
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true }
]
*/