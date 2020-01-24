/*
=> Novo recurso do ES6
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua da Ana',
        numero: 1002
    }
}

const { nome, idade } = pessoa //Método de desestruturar um dado de um objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Atribuindo outros nomes de variaveis para aquelas que pegamos o objeto
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Setando um valor padrão caso for undefined ou nulo
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // Acessando dados de subobjetos
console.log(logradouro, numero, cep)


//Output:
/*
Ana 5
Ana 5
undefined true
Rua da Ana 1002 undefined
*/