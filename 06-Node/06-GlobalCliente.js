require('./06-Global')

console.log(global.meuApp.saudacao())

console.log(global.meuApp.nome)
global.meuApp.nome = "Teste"
console.log(global.meuApp.nome)