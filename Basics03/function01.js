// Function


//A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning that you can use the same function multiple times in your code without having to rewrite it.

// Declaring a function 
function myName(){
    console.log("Suvam");
    console.log("Praharaj");
}
// so here we first write the function keyword, then we write the name of our fuction as we do to declare variable, then the() {} syntax and in the {} we mwntion what is gonna be executed.

// So now if we write only the name of the function that is 

myName;  // It is called as the reference of the function.

// But when we want to call or execute the function then we have to write

myName(); //Suvam
          // Praharaj

function addSum(num1,num2){ // In javascript the types given 9n the parameter doesnot need to have any kind of mention of datatypes.
    console.log(num1+num2);  // NaN  ,, because their no value of parameter or called as argument.
}  
addSum()
addSum(5,6) // 11
addSum(5,"6") // 56
addSum(5,"a") //5a
addSum(5,null) // 5

// here the input given in the functions are called as parameters.
// And the value we give while executiong the fuction are called as arguments,


// we can also store the function in a variable as well

function diff(n1,n2){
    console.log(n1-n2);
}
const result = diff(4,2)

// of we console  the variable then it will not show any result 
console.log(`Result : ${result}`); // Result : undefined
// Because console.log is only to print , it cant store a function's output.

// To do so use return keyword

function difff(n01,n02){
    return n01-n02
}
const result2 = difff(47,21)
console.log(result2); // 26
// "return" keyword stores the value in an variable as an output of the function.







