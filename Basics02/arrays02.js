 const dcHeros = ["Batman","Superman","Lanterns"]
 const marvelHeros = ["Ironman","Thor","Caps"]

 marvelHeros.push(dcHeros)
 console.log(marvelHeros);// [ 'Ironman', 'Thor', 'Caps', [ 'Batman', 'Superman', 'Lanterns' ] ] , It adds dcHeros as an arrays which has become a single element in marvelHeroes.

 const supes = marvelHeros.concat(dcHeros)
 console.log(supes); // [ 'Ironman', 'Thor', 'Caps', 'Batman', 'Superman', 'Lanterns' ] , It concats the two arrays and create a new array.

// Spread Operator
 const allNewSupes = [...marvelHeros,...dcHeros]
 console.log(allNewSupes); // [ 'Ironman', 'Thor', 'Caps', 'Batman', 'Superman', 'Lanterns' ]

// This is called as the spread operator , between spread and concat , spread operator is prefer to use because it can make the elements of arrays individual.


const otherArr = [45,1,87,[45,6,5,[40,45]]] 

const realArr = otherArr.flat(Infinity)
console.log(realArr); // // [45, 1, 87, 45,6, 5, 40, 45] , The flat() creates a new arrays including all the subarray and all are concatenated .

console.log(Array.isArray("Suvam")); // false

console.log(Array.from("Suvam")); // [ 'S', 'u', 'v', 'a', 'm' ] , it makes the value in an arrays.

console.log(Array.from({name:"Suvam"})); // [] ,(INTEReSTING) returns an empty string because it doesnot knoe that should it make the "name;" keyword in a string or make the value that is "Suvam" into a string.

let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1,sc2,sc3)); // [ 100, 200, 300 ] , the .of() method makea a combination of muliple arrays into a new arry.
