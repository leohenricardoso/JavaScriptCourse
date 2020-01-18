/**
=> De modo em que let tem escopo de bloco - diferente de var - quando chamamos o array de função passando
os indexes que queremos, ele aponta realmente para o valor de i dentro da execução do loop.
Como se ele salvasse esse valor em memória - diferente de var.
 */

const funcs = []
console.log("Entrou no loop:")
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
    funcs[i]()
}

console.log("Fora do loop:")
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
2
8
 */
