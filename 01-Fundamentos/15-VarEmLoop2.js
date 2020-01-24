/**
var não possui escopo de função, então nesse caso ele vai ignorar o valor de i durante a execução do loop,
então quando chamamos esse array de function, ele apenas recebe o ultimo valor de i, indemendente do index desse array que chamamos
 */

const funcs = []
console.log("Entrou no loop:")
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
    funcs[i]() //Aqui ele trará os valores reais de i dentro de cada index
}

console.log("Fora do loop:")
//Aqui ele recebe apenas o ultimo valor de i, não levando em consideração o index chamado no array
funcs[2]()
funcs[8]()

//Output:
/**
Entrou no loop:
0
1
2
3
4
5
6
7
8
9
Fora do loop:
10
10
 */