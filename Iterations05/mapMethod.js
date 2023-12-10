// MAP

// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

const numbers = [ 1,2,3,4,5,6,7,8,9,10]

const theN = numbers.map( (n) => {
    return n+100
})
console.log(theN);
/*
[
  101, 102, 103, 104,
  105, 106, 107, 108,
  109, 110
]
*/

// Methods Chaining

//Method Chaining is a programming strategy that simplifies your code. It is a mechanism of calling a method on another method of the same object.


const number1 = [1,2,45,856,86,23,47,84,614]

const op = number1.map( (e) => {
    return e+10
    /*
[
   11, 12, 55, 866,
   96, 33, 57,  94,
  624
]
*/
}).map( (e) => {
   return e/10
  /*
   [
    1.1, 1.2,  5.5,
   86.6, 9.6,  3.3,
    5.7, 9.4, 62.4
    
 ]
 */
}).filter( (ee) => {
   return ee+100
})

console.log(op);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
