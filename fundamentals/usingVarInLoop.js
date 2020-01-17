//Since var has global scope in this case, even declaring it within the for 
//implementation, when it exits the loop it exits with the value already incremented.

for (var i = 0; i < 10; i++) {    
    console.log(i)
}
console.log("i = ", i)