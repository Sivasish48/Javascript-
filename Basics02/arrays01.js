// How to declare array

const myArr = [0,1,45,7]
// Javascipt array can be resizeable and it can store differnt type of element.

// we can access the element in array like below
// it is zero indexed
console.log(myArr[0]);

// we can also declare array in another way.

const myArr2 = new Array(45,587,452,1,4)
// by declaring this way we can enable various prototype methods 

myArr2.push(174);
console.log(myArr2); // [ 45, 587, 452, 1, 4, 174 ] it adds the value as the last element.

myArr2.pop();
console.log(myArr2);//[ 45, 587, 452, 1, 4 ] it removes the last element

myArr2.unshift(99)
console.log(myArr2); //[ 99, 45, 587, 452, 1, 4 ] It adds the value as the first element which involves the shifting positions of every exsisting elements.

myArr2.shift()
console.log(myArr2);//[ 45, 587, 452, 1, 4 ] it removes the first element

console.log(myArr2.includes(452));// true , it is a questionare method which gives the output in boolean

const ar = new Array(14,45,12,2,5);
console.log(ar.indexOf(14)); // 0 , it gives the index value of the given element ,it gives a valid number if the input given input in the parameter is present in the array otherwise it gives the out as -1 which is false 

const strar = ar.join()
console.log(strar); // 14,45,12,2,5   , .join() method turns the exsisting elements of the array into string distinguishly

