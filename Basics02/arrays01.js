// How to declare an array

const myArr = [0,1,45,7]
//Javascript array can be resizeable and it can store different types of elements.

//We can access the element in an array like below
// it is zero-indexed
console.log(myArr[0]);

//We can also declare an array in another way.

const myArr2 = new Array(45,587,452,1,4)
//By declaring this way we can enable various prototype methods 

myArr2.push(174);
console.log(myArr2); // [ 45, 587, 452, 1, 4, 174 ] it adds the value as the last element.

myArr2.pop();
console.log(myArr2);//[ 45, 587, 452, 1, 4 ] it removes the last element

myArr2.unshift(99)
console.log(myArr2); //[ 99, 45, 587, 452, 1, 4 ] It adds the value as the first element which involves the shifting positions of every existing element.

myArr2.shift()
console.log(myArr2);//[ 45, 587, 452, 1, 4 ] it removes the first element

console.log(myArr2.includes(452));// true, it is a questionnaire method which gives the output in boolean

const ar = new Array(14,45,12,2,5);
console.log(ar.indexOf(14)); // 0, it gives the index value of the given element, it gives a valid number if the input given input in the parameter is present in the array otherwise it gives the out as -1 which is false 

const strar = ar.join()
console.log(strar); // 14,45,12,2,5, .join() method turns the existing elements of the array into string-distinguished

//Slice method
let array = [4,5,89,7,3,9]
console.log("A " , array); //A  [ 4, 5, 89, 7, 3, 9 ]

let slicearr = array.slice(1,3);
console.log(slicearr); //[ 5, 89 ]
console.log("B ",array)// B  [ 4, 5, 89, 7, 3, 9 ]
// The slice method detaches the particular element as mentioned in the parameter as range and does not include the last range. The slice() method does not manipulate the original array as well.


// Splice
let array2 = [14,75,7,45,9,8]
console.log("A ", array2); // A  [ 14, 75, 7, 45, 9, 8 ]

let splicearr = array2.splice(1,3)
console.log(splicearr); // [ 75, 7, 45 ]
 
console.log("B ",array2); // B  [ 14, 9, 8 ]
// The splice method also detaches particular elements as mentioned in the parameter as range and it does include the last range. The splice() method manipulates the original array as well by cutting off the elements that are mentioned in the parameter.
