/*
=> Usando let em um loop, a variavel só ficará visível dentro laço, caso tentemos usa-la
fora do laço de repetição, estará dando erro de variavel não definida.
*/

for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log('Outside: ', i)

//Output:
/*
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
ReferenceError: i is not defined
*/