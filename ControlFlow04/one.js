// first ever control flow is if statement

// In this approach, we are using an if statement to check a specific condition, the code block gets executed when the given condition is satisfied.


if (2 !== "2")
{
    console.log("hi");
} // hi

// USING IF-ELSE STATEMENT

// The if-else statement will perform some action for a specific condition. If the condition meets then a particular code of action will be executed otherwise it will execute another code of action that satisfies that particular condition.

let num = -10; 
  
if (num > 0) {
console.log("The number is positive."); 
}
else{
console.log("The number is negative");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}