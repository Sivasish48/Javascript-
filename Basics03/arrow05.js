// THIS keyword

// In JavaScript "this" keyword refers to an object.
// "this" keyword refers to the current context object.

// This keyword refers to different objects depending on how it is used.

// let us see an example of this and how it refers to the object.

const user = {
    userName : "Suvam" ,
    price : 399 ,
    message : function (){
        console.log(`${this.userName} , welcome.`);
    }

}
console.log(user); // { userName: 'Suvam', price: 399, message: [Function: message] 
console.log(user.message()); // Suvam , welcome.

//let's change the value of the property

user.userName = "Peps"
console.log(user.message()); // Peps, welcome ( here the current context of the keyword userName is"Peps")

// now we know that the "this" keyword refers to the current context of the scope.

//  so we can say "In an object method, this refers to the object."

// In a function, this refers to the global object.

//Here we have the user object where we have a property called message and it stores a function in the function, this keyword is used so this keyword will refer to its global object that is user object.

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

//Let us see if we console log this keyword in the global scope or globally.

console.log(this); // {} (it shows empty. because we are in the node js environment where there is no object means empty object)


// BUT >>IMPORTANT<<

// IF WE CONSOLE LOG "this" keyword in the browser it will show "window" as the object.


// So we got to know that 
// Alone, this refers to the global object.
//Here in the node environment no object or empty object is present.

// but in the browser there is a window object which is a global object in the browser.

// Let us see if we console log "this" in a function

function ai(){
    console.log(this);
}
ai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 87.89910000562668,
      nodeStart: 2.723200000822544,
      v8Start: 6.244800001382828,
      bootstrapComplete: 43.40700000524521,
      environment: 17.5912000015378,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1699330047657.564
  },
  fetch: [AsyncFunction: fetch]
}
*/

//These are the value of this keyword as a global object.

// The values of the global object in Node.js are functions and variables that are available to all modules in your Node.js program. This means that you can access them anywhere in your program without having to import them.

//let's check if the "this" keyword also refers to the current context while in the function or not.

function hi(){
    let user = "suvam"
    console.log(this.user);

}

hi() // undefined

//Now we got to know that reference for the current context using this doesn't work in the function.
