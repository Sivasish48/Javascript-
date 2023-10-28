// REST Operater

// The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function.
//Its syntax allows us to pass multiple arguments or an indefinite number of arguments as the value for a single parameter.

function myFun(numberr){
    console.log(numberr);
}
console.log(myFun(45,84,54)); // 45,  It will only accept the first argument.

// But by using REST Operater 

function theN(...name){
    console.log(name);
}
console.log(theN("Suvam","papa")); // [ 'Suvam', 'papa' ], The multiple arguments will be executed in an array form.

// Now there is another type of case where

function nuM(value1,value2,...value3){
    console.log(value1);
    console.log(value2);
    console.log(value3);
}
console.log(nuM(45,78,215,569,36,27,91));
/*
value1 = 45
value2 = 78
value. = [ 215, 569, 36, 27, 91 ]
*/

// How to pass an object in a function 

const user = {
    name: "PEPS",
    price: 399
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj["name"]} and price is ${anyObj["price"]}`);
}

console.log(handleObj(user)); // Username is PEPS and price is 399

// Or we can also declare the object directly while executing the function.

handleObj({
    name:"PUPU",
    price:299
})  // Username is PUPU and price is 299


// Like objects we can also pass arrays into the function by both storing it in a variable or declaring it while executing the function.

const myArr = [45,21,17,62]

function arrF(anyA){
   console.log(`The score was ${anyA[2]}`);
}
console.log(arrF(myArr)); // The score was 17


// Or we can declare the array while executing a function.

function newArr(arrr){
    console.log(`My grandapa age is ${arrr[1]}`);
}
console.log(newArr([14,69]));  // My grandapa age is 69

