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

 ## OBJECT LITERAL

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

// It will refer to the window object in browser

// The output will be all the values and properties of the global object.
 
