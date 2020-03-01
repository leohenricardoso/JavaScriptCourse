const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('* * * * *',  function() {
    console.log('Executando tarefa 1! => ', new Date().getSeconds())
})

const regra = new schedule.RecurrenceRule()
regra.second = 5

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2! => ', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
}, 3000);