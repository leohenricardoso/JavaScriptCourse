//A global var can be accessed from anywhere in the code.

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

//A variable within a function can only be used within that function.
function varTest() {
    var localVar = 123
    console.log(localVar)
}

varTest()

//We cannot call a var that is within a function.
//console.log(localVar)