/*
=> Criando uma função callback
=> Criando nosso próprio foreach
*/
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agda', 'Eduardo', 'Leonardo', 'Ana']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})






//Output:
/*
1 - Agda
2 - Eduardo
3 - Leonardo
4 - Ana
*/