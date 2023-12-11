// Reduce Method


// The reduce() method is iterative.

//The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step until there are no more elements to add.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


// example

const arrNum = [1,5,3,5,7,5,]

const total = arrNum.reduce( function(acc,currVal){
  return acc+currVal
},0 )
console.log(total);
// 26


// We can also do that with the arrow function as well 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const billToPay = shoppingCart.reduce( (acc,item) => {
  return acc + item.price
},0)
console.log(`Total bill  to pay is ${billToPay}`);
// Total bill to pay is 22996
