// THIS keyword

// In JavaScript "this" keyword refers to an object.
// "this" keyword refers to the current context object.

// This keyword refers to different objects depending on how it is used.

// let us see a example of this and how it refers to the object.

const user = {
    userName : "Suvam" ,
    price : 399 ,
    message : function (){
        console.log(`${this.userName} , welcome.`);
    }

}
console.log(user); // { userName: 'Suvam', price: 399, message: [Function: message] 
console.log(user.message()); // Suvam , welcome.

// lets change the value of the property

user.userName = "Peps"
console.log(user.message()); // Peps , welcome ( here the current context of the keyword userName is"Peps")

// now we got to know that "this" keyword refers to current context of the scope.

//  so we can say is "In an object method, this refers to the object."

// In a function, this refers to the global object.

// here we have the user object where we have a property called as message and it stores a function and in the function this keyword is used so this keyword will refer to its global object that is user object.

// example
 
const userN = {
    name:"Sivasish",
    msg:function(){
        console.log(`${this.name}, hello.`); // Sivasish, hello.
        console.log(this);
    }
    
}

console.log(userN.msg()); // { name: 'Sivasish', msg: [Function: msg] }

// So here the output is the current context we we print the"this" keyword.

// let us see if we console log the this keyword in the global scope or globally.

console.log(this); // {} (it shows empty. because we are in the node js environment where there no object means empty object)


// BUT >>IMPORTANT<<

// IF WE CONSOLE LOG "this" keyword in the browser it will show "window" as the object.


// So we got to know that 
// Alone, this refers to the global object.
// here in node environment there no object or empty object is present.

// but in the browser there is window object which is a global object in the browser.

