// Object

// There are different ways to declare an object in js.

// object literals 

const user = {
    name:"suvam",
    age:20,
    location:"BBSR",
    Email:"suvam000@gmail.com",
    isLoggedIn:false,
    LastloginDays:["Mon","Wed","Thurs"]
}
// In this way the object has 2 things one is key and the other one is value.
// ex-- name is the key and "suvam" is the value
// While coding the key we can write whatever as the key name and it is saved as the String.
// And at other side the value can be anything as we declare a value of a variable.

// So there are two ways to acces the an object

console.log(user.name); // suvam
console.log(user["name"]); // suvam (it is the most appropriate way )