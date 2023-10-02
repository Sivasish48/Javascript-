const score = 400


//We can also define a variable storing numbers by specifically casting this with a number.
const balance = new Number(100)
console.log(balance);


 // There can be som prototype methods which can be immplememnted with th number like the way we can do in string.

 console.log(balance.toString()); // 100(It is a string.)

 console.log(balance.toFixed(2));// 100.00

 const rate = 4125.45
 console.log(rate.toPrecision(5));//4125.4

  const zeros = 100000000
  console.log(zeros.toLocaleString());// 100,000,000 (It is in US standards by default)
  //To make it a result in Indian Standard the code is>>
  console.log(zeros.toLocaleString('en-IN'));// 10,00,00,000

// MATH

// Math is a object in javascript where there is a lot of values and methods are present.


console.log(Math);
console.log(Math.abs(-4)); // 4
// .abs() method converts the negative number into a positive one

console.log(Math.round(7.8));// 8
// .round() converts a decimal number into an round figured integer
console.log(Math.round(4.5)); // 5

console.log(Math.ceil(7.1)); // 8
// .ceil() method will always round up decimal number with upper value

console.log(Math.floor(5.9)); // 5
// .floor(0) method will always chhose the lower value to round up the decimal number.

console.log(Math.min(4,54,78,1,0.14)); // 0.14 Finds the minimum value
console.log(Math.max(45,4256,7895,1110));// 7895 Finds the max value

console.log(Math.random()); // This method gies us the random value between 0 and 1 when it is run

 // so to get minimum of one value at left of the decimal we need to multiply it with 10 and add a 1

 console.log((Math.random()*10)+1); 
 // now it will give a number between 1 to 9 at the left side of the decimal number 

 // And we can round up the number with the math.floor function or method() as we know it gives thye lower value.
 console.log(Math.floor((Math.random()*10)+1));
 // Now it will give the value from 1 to 9


// Now there is another way to use Math.random() with min and max range.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (min - max +1)) + min);

