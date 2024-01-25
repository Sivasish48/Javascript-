# 1. Does JavaScript have classes?

# Yes, JavaScript has introduced class syntax as part of ECMAScript 2015 (ES6) to make it easier to work with object-oriented programming concepts.

# Although Javascript is a prototype-based language.

# JavaScript's class syntax is mostly syntactic sugar over its existing prototype-based inheritance system.

#  The class syntax provides a more familiar and cleaner syntax for those coming from other object-oriented programming languages like C++, java,  etc. 

# 2. What is OOP?

# Object-oriented programming (OOP) is a programming paradigm that uses the concept of "objects" to organize and structure code.

# As we know Javascript is a prototype-based language and not a class-based language. But still, we can apply some OOP principles here.  

# 3. What is an object?

# Object is nothing but a collection of properties and methods.

# 4. Why do we need OOP?

# In simple words, OOP provides a way to structure and organize the code and it eradicates the spaghetti code (messed up code).

# 5. Parts of OOP in JS?

 -- Object Literal (A literal object)
 -- Constructor Function
 -- Prototypes (proto)
 -- Classes
 -- Instances (new, this...etc)

 # 6. 4 pillars of OOP?

 -- Abstraction
 -- Encapsulation
 -- Inheritance
 -- Polymorphism


```javascript

  OBJECT LITERAL
 ----------------
 -- In JavaScript, an object literal is a way to create an object by specifying its properties and values directly within curly braces {}.

 -- Basically, it is just an object defined.
 -- Let us have a simple example of an object.

 const user = {
    username: "SUVAM",
    Regdno: 125,
    Section: "B",
    Branch : "CSE",
    Gender: "male",
    signIn : true,

    getStudentDet : ()=>{
        console.log(`Got student's details.`)
    }
    
 }

// Now let's get some properties from the above object.

 console.log(user.Regdno)// 125
 console.log(user.username);// SUVAM
 console.log(user.getStudentDet()); // Got student's details.

## NOTE: 'this' keyword


--In JavaScript, this keyword refers to the current execution context or the object to which the function belongs.

-- Let us take another example of an object.


 const carShop = {
    BestBrand : "Volve",
    FullStock : "Range Rover",
    Soldout : "KIA",
    notSelling:"Toyota",
    location:"Bhubaneswar",
    
    theMsg : ()=>{
       console.log(`The Car shop is situated at ${location}`); // It will throw error

       // So here the current context is not defined.
    }
}

console.log(carShop.theMsg()); // ERROR


const carShop = {
    BestBrand : "Volve",
    FullStock : "Range Rover",
    Soldout : "KIA",
    notSelling:"Toyota",
    location:"Bhubaneswar",
    
    theMsg : ()=>{
       console.log(`The Car shop is situated at ${this.location}`); 

       // So here the current context is defined with "this".
    }
}

console.log(carShop.theMsg()); // ERROR

-- The right method is 

const carSh = {
    BestBrand : "Volve",
    FullStock : "Range Rover",
    Soldout : "KIA",
    notSelling:"Toyota",
    location:"Bhubaneswar",
    
    theMsg : function(){
       console.log(`The Car shop is situated at ${this.location}`); 

       // So here the current context is defined with "this".
    }
}


console.log(carSh.theMsg());
// The Car shop is situated at Bhubaneswar


-- So next try if we console.log the "this" in an object inside a function, it will return or print the current object



const obj ={
    num:11,
    nextnum:24,
    
    thethis : function(){
        console.log(this);
    }
}

console.log(obj.thethis());

// output is --> { num: 11, nextnum: 24, thethis: [Function: thethis] }



-- What if we console "this" in global in node.js

console.log(this);// {}

//It will return an empty object.
//When we print "this" in global, it will refer to the global object in the node which is an empty object.

-- What if we print " this" in the browser

// It will refer to the window object in the browser

// The output will be all the values and properties of the window object.


Constructor Function 
--------------------

--- n JavaScript, a constructor function is a special type of function that is used to create and initialize objects. 

--- Constructor functions are typically used with the "new" keyword to create instances of an object type.

// Example

 const newProm = new Promise()
 const newDate = new Date()

---  When a constructor function is invoked with "new", it creates a new object and sets "this" to refer to that object.


function User (userName,loginCount,isLoggedIn){
    this.name = userName
    this.lg = loginCount
    this.islg = isLoggedIn
    
    return this
    // we also dont need to write return.s
}

const userOne = new User("Hari",55,false)
// We should use new to create an instance of User.

console.log(userOne);
// output is

/*
  name: 'Hari',
  lg: 55,
  islg: false
  */

  


--- Now if we  would create another  variable to store the mentioned arguments.

const userTwo = User("Ram",69, true)

 console.log(userTwo);

 // the output is

 /*
  name: 'Ram',
  lg: 69,
  islg: true
  */

  -- As we all can notice the value of userTwo has replaced the value of userOne.

  -- Although we already have consoled the userOne still it prints the value of userTwo.
  
  -- To overcome this conflict situation we need to use the "new" which creates an instance as a constructor.
  
  -- Let us have an example with userThree and userFour.

  const userThree = new User("Shyam",44,true)
  console.log(userThree);

  // output is ---> User { name: 'Shyam', lg: 44, islg: true }

  const userFour = new User("Suvam",12,true)
  console.log(userFour);

  // output is 

  // User { name: 'Shyam', lg: 44, islg: true } ( for userThree)

  // User { name: 'Suvam', lg: 12, islg: true }
  

--- What happens when we use the "new" keyword?

- step1 --
The new keyword creates a new, empty object.

- step2 --
 Inside the constructor function, "this" refers to the newly created object.

 - step3 --
 The constructor function initializes the object by setting properties and methods on the object using "this".

 - step4 --
 The new object is returned.

---- NOTE ----

 The instance of the operator in JavaScript returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 

 // Example 

 console.log(userFour instanceof User);// true



 PROTOTYPE
 ---------

 --- A prototype is a set of properties and methods that are shared among all instances created from it.
 --- Everything becomes an object in Javascript at the end of the day.
 --- All the functions, strings, and arrays refer to the object prototype, and the property of an object prototype is available for all prototypes.


 ---- 1. Prototype Object----

 //Let us take an example for a function using an object prototype.

function mul(num){
   return num*8
}

mul.power = 7
console.log(mul(8)); // 64

console.log(mul.power); //7


----2."prototype" Property----

-- Each function in JavaScript has a special property called prototype. When you create an object using a constructor function(using new), the newly created object inherits properties and methods from the constructor's prototype.


function Person(name) {
    this.name = name;
    console.log(this.name);
  }
  console.log(Person("suvam")); // suvam

// Adding a custom function as the prototype

  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  

// Now create a constructor function to inherit the property of the "Person" function.

  const person1 = new Person("John");
  
  person1.sayHello(); // Outputs: Hello, my name is John.


 ----3. __proto__ Property----

 -- Every object in JavaScript has a special __proto__ property that points to its prototype object.

--  It's important to note that the use of __proto__ is considered somewhat outdated, and the recommended approach is to use Object.getPrototypeOf() and Object.setPr ototypeOf() for accessing and modifying the prototype.


NOTE
----
CALL AND THIS
-------------

--  // The .call() method is particularly useful in scenarios where you want to reuse a function but with a different context or set of arguments.


  function setUser (username){
         this.username = username
         console.log("called");
  }

  function callUser (username,gender,password){
      
   // setUser(username)

   setUser.call(this,username)

    this.gender = gender
    this.password = password
  }

  const newCall = new callUser("suvam","M",457822)
  console.log(newCall);

  // The output is 
  // called
  // callUser { gender: 'M', password: 457822 }

  // but to get username in the object we need to use call and this in line no. 337

// output callUser { username: 'suvam', gender: 'M', password: 457822 }



CLASSES IN JAVASCRIPT
---------------------

-- In JavaScript, classes were introduced in ECMAScript 2015 (ES6) as a syntactical sugar over prototype-based inheritance.

--  Classes make it easier to create and manage objects with a more familiar syntax for developers who are accustomed to class-based languages.

-- Example



class Tiger {

    // Constructor method for initializing the instances.
  
    constructor(name,sound){
      this.name = name
      this.sound = sound
    }
     
    // A method defined in the class
    makeSound(){
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  // creating an instance Tiger class
  const zooKeeper = new Tiger ("Cat", "Meow")

  // Using the instance's method
 zooKeeper.makeSound()  // Cat says Meow



 // Let us see how it work behind the scene

 function Animal(name,sound){
      
      this.name = name
      this.sound = sound
 }

 Animal.prototype.makeSound = function () {
      console.log(`${this.name} says ${this.sound}`);
 }

 const zooKeeper = new Animal ("cat","meow")
 zooKeeper.makeSound() // cat says meow

  
