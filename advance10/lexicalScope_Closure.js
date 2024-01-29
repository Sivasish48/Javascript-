// Lexical scope

// It refers to how variables are accessible within nested functions i.e between the parent function , child child function.

// JavaScript uses lexical scoping, which means that functions create a scope chain based on where they are defined, not where they are executed.

// example

function outerFunction() {
    const outerVar = 'I am from outer function';
    
    function innerFunction() {
      console.log(outerVar); // Accessible because of lexical scope
    }
    
    innerFunction();
  }
  
  outerFunction(); // Output: "I am from outer function"
  
  // NOTE that inner functions can access the values and properties of outer functions.
  // But outer functions  cannot access the values and properties of its inner function.
  // And two inner functions cannot share their values and properties as well.

  // Another example

  function outer(){
        let username = "suvam"
           console.log("OUTER", secret);
          function inner(){
             let secret = "my123"
             console.log("inner", username);
          }
         function innerTwo(){
             console.log("innerTwo", username);
             console.log(secret);
          }
          inner()
          innerTwo()

     }
     outer()
     console.log("TOO OUTER", username);


     // CLOSURE

     
     //  A closure "encloses" the environment in which it was created, retaining access to variables in that environment.

      function outerFunction() {
          const outerVar = 'I am from outer function';
  
         function innerFunction() {
            console.log(outerVar); // Accessible via closure
     }
  
          return innerFunction;
       }

  const closure = outerFunction();
   closure(); // Output: "I am from outer function"
