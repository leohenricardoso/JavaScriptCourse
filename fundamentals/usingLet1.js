/*
=> Usando variavel do tipo let, onde podemos ver que ela é visivel apenas dentro do bloco de código
ou do contexto em que está inserida

=> Variavel let utiliza metodologia de escopo, então é data a preferencia a quem está no seu bloco de código ou função,
caso não seja encontrado, procura-se no bloco de código uma camada mais externa.
*/

var number = 1
{
    let number = 2
    console.log("inside = ", number)
}
console.log("outside = ", number)

//Output:
//inside =  2
//outside =  1