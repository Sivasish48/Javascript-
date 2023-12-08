
// the forEach() method or iteration


// The forEach() method of an array executes a provided function for each array element.


const myArr = ['js','python','ruby','js']

myArr.forEach( (index) => {
    console.log(index);
})
/*
js
python
ruby
js
*/

// We can also use the general function here with the forEach()

// NOTE>> There should not be any name of the function.

myArr.forEach( function(index) {
    console.log(index);
})

/*
js
python
ruby
js
*/


// We can also use a existing function as the parameter in the forEach iteration method od=f an array instances.


function exFun(index){
    console.log(index);
}
 
const names = ['sunil','sam','sammu','ravi']

names.forEach(exFun)

/*
sunil
sam
sammu
ravi
*/

// The function we use in forEach() itertaion method can have more than one parameter.

// the parameters can be default parameter as index and arr


const naM = ['hes','ron','qum','len']
naM.forEach( (i,index,arr) => {
    console.log(`Elements are ${i}  ${index}  ${arr}`);
})


/*
Elements are hes  0  hes,ron,qum,len
 Elements are ron  1  hes,ron,qum,len
 Elements are qum  2  hes,ron,qum,len
 Elements are len  3  hes,ron,qum,len
undefined
*/

// Now let us see how we can implement the forEach() iteration method in an array of objects.

const myCode = [{
    theWord : 'JavaScript',
    thelanguage : 'JS'
},
{
    theWord : 'C++',
    thelanguage : 'cpp'
},
{
    theWord : 'python',
    thelanguage : 'py'
}
]

// now let us use the forEach () iteration method


myCode.forEach( (item) => {
    console.log(item.theWord);
})

/*
JavaScript
 C++
  python
*/
