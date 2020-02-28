const contadorA = require('./05-InstanciaUnica')
const contadorB = require('./05-InstanciaUnica')

const contadorC = require('./05-InstanciaNova')()
const contadorD = require('./05-InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)