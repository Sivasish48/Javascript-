const name= "suvam"
const repo = 33
console.log(name+" has " + repo + " repositeries.");
// this is called as string concatination.

// Right way to do is called string interpolation.Given below

console.log(`${name} has ${repo} repositeries.`);

// There is another way to declare a string

const gamename = new String("Assasin's Creed")

// The advantage of declaring a string ina objective way is
//there are some predefined prototype functions or method are available.

// example

console.log(gamename[0]); // A
console.log(gamename.length); // 15
console.log(gamename.toUpperCase()); // ASSASIN"S CREED  ,, it doesnot change the original value

console.log(gamename.charAt(2)) // s 

console.log(gamename.indexOf('d')); // 14

const newstring = gamename.substring(0,4)
console.log(newstring); // Assa  ,, doesnot take negative values

let secstring = gamename.slice(4,9)
//console.log(secstring); // sin's
// it can take negative values
secstring = gamename.slice(-2,7)
console.log(secstring); // Assa

const newStringOne =  "    suvam    "
console.log(newStringOne.trim());// suvam ,It removes the whitespace characters


const url = "https/suvam48%30.com"
console.log(url.replace('%30',"-"));//https/suvam48-.com
// It replaces a pariticular char or sets of char with na char or sets of char.


const aim = "sivasish-pra-ha-raj-48"
console.log(aim.split("-")); // [ 'sivasish', 'pra', 'ha', 'raj', '48' ]
//It splits the string on the basis of a particular parameter here it is "-"

const arr = [45,48,251,793,2567,1500,12,457,561]
console.log(arr.at(2));// 251
console.log(arr.at(-2)); // 457
// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.


const namee = new String("Suvam");
console.log(namee.charCodeAt(0)); // Ascii value of S is 83
//charCodeAt(index)method returns the asci value.

//codePointAt() is also the same.

const number = "4578?"
console.log(number.endsWith("8"));// false
console.log(number.endsWith("8?"));// true

