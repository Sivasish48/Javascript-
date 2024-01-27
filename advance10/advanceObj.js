// Object.getOwnPropertyDescription

// The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property(hidden properties of an object) on a given object 
// And these property of an object are not in the object's prototype chain.

// let us see an example.

console.log(Math.PI);// 3.141592653589793

// Let us try to change its value
Math.PI = 4
console.log(Math.PI); // 3.141592653589793

// So let us check why it cant be changed

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// Let us see the value of descriptor

console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// As we can see there are some of the hard coded property of the object is there.
// Which is writable,enumerable,configurable all set to false
// So we cant change the value of that object due to those unchangable property.


// Let us see can we see this hidden properties of a customized object

const  course = {
    type:"management",
    price:499,
    isAvailable:true
}

console.log(course); // { type: 'management', price: 499, isAvailable: true }

// let us see is there any hidden property of our object's property

console.log(Object.getOwnPropertyDescriptor(course,"price"));

/*
OUTPUT

{ value: 499,
 writable: true,
 enumerable: true,
 configurable: true }
 */

 // As we can see those hidden property and all are set to true.

 // Can we change the properties value of our customized object?

 // Here comes Object.defineproperties(){}

 // The Object.defineProperties() static method defines new or modifies existing properties directly on an object.

 // so it takes three parameters such as object, its property and it modifications

 Object.defineProperty(course,"price",{
    writable:false,
    enumerable:false,
    configurable:false
 })

 console.log(Object.getOwnPropertyDescriptor(course,"price"));

 // { value: 499, writable: false, enumerable: false, configurable: false }

 // Let us iterate the object

 /*
 for ( let [key,value] of course) {
    console.log(`${key} : ${value}`);
 }
 */
// It says object is not iterable , the reason can be of many reasons
// So to iterate it we have to use Object.entries() instead of the object

for ( let [key,value] of Object.entries(course) ) {
    console.log(`${key} : ${value}`);
 }

 /*

 type : management
isAvailable : true

*/

