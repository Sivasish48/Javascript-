


// JAVASCRIPT ARROW FUNCTIONS

// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax.

// There are 2 types of basic ways where we can declare an arrow functions.

// Explicit or Regular arrow function

// In this type of arrow function we use the return keyword with curly braces.

// EX>>>>>

const addt = (n1,n2) => {
    return n1+n2
}
console.log(addt(5,6)); // 11

// We can also write the regular or explicit arrow function by another way that is writing the return keyword and curly braces within the same line

const add = (num1,num2) => {return num1+num2}
console.log(add(45,52)); // 97

// If the function has only one statement and the statement return a value we can remove the brackets and the return keyword as well 


// ex>>>

const hello = () => "hello world"

console.log(hello()); // hello world

//  Note: This works only if the function has only one statement.


// if we have only one parameter in the function we can pass that without paranthesis.

const yo = greet => {
    return `${greet} , suvam.`
}
console.log(yo("hiii")); // hiii , suvam.



// Implicit arrow function

// It is an arrow fucntion where "return" keyword is removed with the curly braces and paranthesis are used instead of them.
