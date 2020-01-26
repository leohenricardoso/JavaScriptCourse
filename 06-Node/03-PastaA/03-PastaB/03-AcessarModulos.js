/*
=> Usando a função require para usar outros módulos
*/
const moduloA = require('../../01-ModuloA') //Saindo de duas postas para acessar o arquivo
console.log(moduloA.ola)

//const moduloB = require('D:\DEV\Projects\Js Course\06-Node\01-ModuloB.js') // Não usar dessa maneira, mas funciona

const c = require('./03-PastaC') //Busca por padrão o arquivo index quando requeremos uma pasta do modulo
console.log(c.ola2)

const http = require('http')    //Módulo padrão do node
http.createServer((req, res) => { // ==> Cria uma requisição, se acessar http://localhost:8080 irá ver o resultado
    res.write('Boa noite')
    res.end()
}).listen(8080)

//Output:
/*
Hello World
Legal
*/
