// Object singleton or through a constructor

const appUser = new Object();

appUser.id = "abc12301"
appUser.name  = "DP"
appUser.isLoggedIn = false

console.log(appUser); // { id: 'abc12301', name: 'DP', isLoggedIn: false }


// We can add an object in the object and it can be as nested as it can
const regUser = new Object(
    {
        email:"abc@mail.com",
        fullname:{
            userfullname:{
                firstname:"Sivasish",
                lastname:"Praharaj"
            }
        }
     }
)
 
 console.log(regUser.fullname); //  userfullname: { firstname: 'Sivasish', lastname: 'Praharaj' } }

// We can join the two different objects into one object

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"s",
    4:"f"
}

// Here are below are some different and unexpected result

const obj3 = {obj1,obj2}
console.log(obj3); //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 's', '4': 'f' } }, This, not we need

//There are some ways to do this

//const obj3 = Object.assign(obj1,obj2)
console.log(obj3);// { '1': 'a', '2': 'b', '3': 's', '4': 'f' }

// And the appropriate way is

//const obj3 = Object.assign({},obj1,obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 's', '4': 'f' }

// The assign() is used to join two elements of different objects in a single object.

// We can also use the spread operator to combine different objects.

const obj10 = {
    14:"hg",
    45:754
}
const obj11 = {
    52:"jhi",
    157:7580
}
const obj15 = {...obj10,...obj11}
console.log(obj15); // { '14': 'hg', '45': 754, '52': 'jhi', '157': 7580 } , This method is used mostly

//While retrieving data from the database the objects come up in the array

const dbUser = [
    {
        email:"S@gmail.com",
        isLoggedIn: false
    },
    {
        email:"SS@gmai.com",
        isLoggedIn:true
    }
]

console.log(dbUser[1].email); // SS@gmai.com  (We can acees those value like this)


// We can also access the values or the keys to loop through the data (which is very important)

const newO = new Object(
    {
        name:"peps",
        age:19,
        gender:"male"
    }
)
console.log(Object.keys(newO)); // [ 'name', 'age', 'gender' ]  (FOR keys)
console.log(Object.values(newO)); // [ 'peps', 19, 'male' ] (FOR values)

// There is a another method where we can keep the keys with their values in an individual array in the whole array.

console.log(Object.entries(newO)); // [ [ 'name', 'peps' ], [ 'age', 19 ], [ 'gender', 'male' ] ]

// There is anothere syntax where we can check whether a particular property or key is present in the object or not and the result comes in boolean.

console.log(newO.hasOwnProperty("isLoggedIn"));// false


