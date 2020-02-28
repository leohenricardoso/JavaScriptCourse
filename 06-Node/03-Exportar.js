//Modos de exportar uma variavel

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: "Teste"
}

console.log(module.exports)

module.exports = {
    public: true
}

console.log(module.exports)