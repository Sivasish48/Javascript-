// Function


//A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning that you can use the same function multiple times in your code without having to rewrite it.

// Declaring a function 
function myName(){
    console.log("Suvam");
    console.log("Praharaj");
}
// so here we first write the function keyword, then we write the name of our function as we do to declare a variable, then the() {} syntax, and in the {} we mention what is gonna be executed.

// So now if we write only the name of the function that is 

myName;  // It is called as the reference of the function.

// But when we want to call or execute the function we have to write

myName(); //Suvam
          // Praharaj

function addSum(num1,num2){ // In javascript the types given 9n the parameter does not need to have any kind of mention of datatypes.
    console.log(num1+num2);  // NaN, because of their no value of a parameter or called as an argument.
}  
addSum()
addSum(5,6) // 11
addSum(5,"6") // 56
addSum(5,"a") //5a
addSum(5,null) // 5

//Here the input given in the functions are called parameters.
// And the values we give while executing the functions are called arguments,


//We can also store the function in a variable as well

function diff(n1,n2){
    console.log(n1-n2);
}
const result = diff(4,2)

//if we console  the variable then it will not show any result 
console.log(`Result : ${result}`); // Result: undefined
// Because console.log is only to print, it can't store a function's output.

// To do so use the return keyword

function difff(n01,n02){
    return n01-n02
}
const result2 = difff(47,21)
console.log(result2); // 26
// "return" keyword stores the value in a variable as an output of the function.

// After using the return keyword in a function anything written after the return keyword will not be executed.

function hi(n5,n7){
    const res = n5/n7
    return res;
    console.log("hello"); // not executing
}
console.log(hi(15,3)); // 5


function logUser(username){
    return`${username} just logged in.`
}
console.log(logUser("Suvam")) // Suvam just logged in.

//When we don't pass any argument while calling or executing a function that will show the result as undefined.

console.log(logUser()); // undefined just logged in.


// We can also pass the value of a parameter while declaring the function itself.

function names(nameis="Peps"){
    return`${nameis} hello!`
}
console.log(names()); // Peps hello!

// But if we give or pass the argument while executing the function then the new value will override the previous value.

console.log(names("pepu")); // pepu hello!










