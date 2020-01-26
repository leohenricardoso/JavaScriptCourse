/*
=> Usamos o comando 'npm i lodash' para instalar o módulo lodash
=> O módulo é de terceiros
=> O módulo foi instalado dentro da pasta node_modules\lodash
=> Nesse arquivos usamos apenas um método desse módulo para testar se está funcionando
*/

const _ = require('lodash')
const intervalo = setInterval(() => console.log(_.random(1, 1000)), 2000)

//clearInterval(intervalo)