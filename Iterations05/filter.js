// when we declare an array and use the forEach() iteration method it doesnot really return value.

const dc = ['batman','flash','supes','wonderwoman']

dc.forEach( (item) => {
  return dc;
} )
// it returns nothing in the terminal.


// perhaps we can return the value and the values can be shown in the terminal but it takes a little bit of thinking and syntax.
const oldD = [1,5,6,2,7,5,9,8,7,14]
const newD = []

oldD.forEach( ((num) => {
    if (num>4) {
        newD.push(num)
    }
    
}) )
console.log(newD);

/*
[
  5, 6, 7,  5,
  9, 8, 7, 14
]
*/
// FILTER
// We can also use the filter iteration method which can return the values.


const theNumb = [45,56,12,87,63,11,51,7,5,9,50,51,47]

const numss = theNumb.filter( (numb) => {
    return numb > 45 
})
console.log(numss);

/*
[
    56, 87, 63, 51,
    50, 51, 47
  ]
  */

  


