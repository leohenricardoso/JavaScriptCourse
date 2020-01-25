/*
=> Estamos usando o sistema de módulos CommomJS
=> Cada arquivo no node é visto como um módulo
=> A maneira que estamos usando para exportar dados nesse módulo é mais usada do que as
mostradas no ModuloA
*/

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}