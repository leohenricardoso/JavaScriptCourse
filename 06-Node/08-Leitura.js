const fs = require('fs')

const path = __dirname + '/Arquivos/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(path, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})