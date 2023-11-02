
 // Nested Scope

 // let us have an example with a nested function

 function numOne(){
     const x = 45
     function numTwo(){
        let y = 10
        console.log(x+y);
     }
     console.log(y); //  y is not defined

     numTwo()
 }

 numOne() 

 // From the above example we learned that in a nested function, the child function can have access to the variables of its parent function.
 // But the parent function can not have the accessibility for the variables of its child function.


 // We can also have an example for the nested if statements

 if(true){
    const xx = "Suvam"
    if(xx === "Suvam"){
        const xy = " Praharaj"
        console.log(`${xx} ${xy}`);
    }
    console.log(xy); // xy is not defined, because it can't access the value of xy as parent scope from its child scpoe.
 }
 console.log(xx); // xx is not defined because this variable has functional scope.


 // Little discussions about hoisting

 function addOne(num){
   return num+1
 }

 console.log(addOne(5)); // 6 

 // What if we declare the function as it is and call or execute the function above the function?

 console.log(addOne(5));
 
 function addOne(num){
    return num+1
  }
 
  
