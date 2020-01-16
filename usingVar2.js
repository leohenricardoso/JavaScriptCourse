//Because it is global in scope, even though it is in different code blocks, one var will always overwrite another var with the same name.

var number = 1
{
    var number = 2
    console.log("inside = ", number)
}
console.log("outside = ", number)