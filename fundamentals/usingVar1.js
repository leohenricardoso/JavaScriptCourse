/*
Para usar variavel do tipo var precisa ter consciencia de que ela pode ser
acessada de qualquer lugar do script caso ela esteja em um bloco de código.
Caso uma var seja declarada dentro de uma função, ela estará disponivel apenas nessa função.
*/

{
    {
        {
            {
                var globalVar = 'Global?'
            }
        }
    }
}

console.log(globalVar)

function varTest() {
    var localVar = 123
    console.log(localVar)
}

varTest()

//Output:
//Global?
//123