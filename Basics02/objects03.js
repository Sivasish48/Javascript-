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
// And on the other side the value can be anything as we declare a value of a variable.

// So there are two ways to access the object

console.log(user.name); // suvam
console.log(user["name"]); // suvam (it is the most appropriate way )

// We can also add the symbol variable into an object and can also access them with the bracket form.
// And we need to declare the symbol variable before we mention it in any object.
const mySym = Symbol("mynameis")
const me = {
    [mySym]:"mynameis",
    msg:"hello",
    lang:"English"
}

console.log(me[mySym]); // mynameis
console.log(user["age"]); // 20
console.log(typeof user["age"])// number

// Now let's see how we can change the value of an object.

user.age = 24;
console.log(user["age"]);// 24

// We can also freeze or lock the value of the objects so that it can't be changed again.

Object.freeze(user)
user.age=45;
console.log(user["age"]); // 24

// So now we can also add a function as a value in an object.
const newuser = {
    name:"SUVAM",
    sex:"Male",
    age:20
}
newuser.welcome = function(){
    console.log(`hello ${this.name},How r u?`);
}

console.log(newuser.welcome); // [Function (anonymous)], By trying  to access the value of an object like this, if the key has a function as a value then in the terminal only the type of the value will be shown just like here it is only referring an anonymous function.

// Correct way to access is 
console.log(newuser.welcome());// hello SUVAM,How r u?
 
