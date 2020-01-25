/*
=> Estamos importando os módulos A e B
=> Estamos acessando os dados exportados desses módulos
*/

const moduloA = require('./01-ModuloA') //Precisa importar dessa maneira (Caminho relativo) usando ./ mesmo que esteja na mesma pasta
const moduloB = require('./01-ModuloB') //Se o arquivo tiver a extenção .js, não precisa colocar

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

//Output:
/*
Hello World
You're welcome
See you!
Bom dia
Boa noite
*/