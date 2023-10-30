// SCOPE

// Scope determines the accessibility (visibility) of variables.

// Javascript has 3 types of scopes those are Block scope, Function scope, and global scope.

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These 2 keywords provide Block Scope in Javascript.

// Block Scope

//  variables declared inside a {} can't be accessed from outside of the block by using these keywords as let and const.

{
    let x = 1
    const y  =7
}
console.table[(x,y)] // not defined

// But the variable declared with the keyword var can not have block scope.
// While declaring a variable with var keyword inside a {} can be accessed from outside the block.

{
    var c = 4
}
 console.log(c); // 4

 // Local Scope 
 
 //  Variable declared within a Javascript function becomes LOCAL of the function.

 function myF(){
    let car = "Volvo"
    const car2 = "KIA"
    var car3 = "XUV700"
 }
 //console.log(car); // car is not defined
 //console.log(car2); // car2 is not defined
 //console.log(car3); // car3 is not defined

 // Local Scope is  applicable for all keywords (var, let, const)

 // Local variables have function scope it can only be applicable within a function.

 // Since local variables are created within a function they can also be used in different functions.
 
 


 

 
