/*
Como a variavel var possui apenas escopo global e local, como ela foi declarada dentro do loop
ela assume forma global, sendo assim, o valor incrementado dentro do loop permanece nela mesmo após a execução do mesmo.
*/

for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log("i = ", i)

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
i =  10
*/