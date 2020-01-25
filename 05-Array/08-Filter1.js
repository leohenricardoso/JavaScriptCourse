/*
=> Filter é uma função callback que retorna verdadeiro ou falso
=> Filter serve para filtrar dados dentro de um array
*/
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de platico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {   //Chamando a função passando uma função como parametro
    //return false              Não retorna dado nenhum
    //return true               Retorna todos os dados
    return p.preco > 2500     //Só retorna os items com valores acima de 2500
}))

const isFragil = produto => produto.fragil // Criando função arrow que retorna se o produto é fragil
const caro = produto => produto.preco >= 500 // Retorna os produtos com preço acima de 500

console.log(produtos.filter(caro).filter(isFragil)) // Usando a função filter sucessivamente

//Output:
/*
[ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
[
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true }
]
*/