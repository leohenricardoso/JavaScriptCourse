/*
Pelo fato de var ser global quando se trata de blocos de código,
nesse caso var number será sobrescrito
*/
var number = 1
{
    var number = 2
    console.log("inside = ", number)
}
console.log("outside = ", number)

//Output:
//inside =  2
//outside =  2