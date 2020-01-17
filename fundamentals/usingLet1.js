//Using let variable, the scobe is inside the block, ie it will only be visible inside the block

//Let the preference for your block, if not found, is searched in the outside block
var number = 1
{
    let number = 2
    console.log("inside = ", number)
}
console.log("outside = ", number) 