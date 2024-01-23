const user = {
    username: "SUVAM",
    Regdno : 125,
    Section : "B",
    Brance : "CSE",
    Gender : "male",
    signIn : true,

    getStudentDet : ()=>{
        console.log(`Got student's details.`)
    }
    
 }

 console.log(user.Regdno)// 125
 console.log(user.username);// SUVAM
 console.log(user.getStudentDet()); // Got student's details.


/*


 const carShop = {
    BestBrand : "Volve",
    FullStock : "Range Rover",
    Soldout : "KIA",
    notSelling:"Toyota",
    location:"Bhubaneswar",
    
    theMsg : ()=>{
       console.log(`The Car shop is situated at ${location}`); // It will throw error
    }
}

console.log(carShop.theMsg()); // ERROR

*/

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



const obj ={
    num:11,
    nextnum:24,
    
    thethis : function(){
        console.log(this);
    }
}

console.log(obj.thethis());

// output is --> { num: 11, nextnum: 24, thethis: [Function: thethis] }


console.log(this);// {}


function User (userName,loginCount,isLoggedIn){
    this.name = userName
    this.lg = loginCount
    this.islg = isLoggedIn
    
    return this
}

const userOne =  User("Hari",55,false)
// We should use new to create an instance of User.
//The user should be User to follow the convention of the constructor function.
console.log(userOne);
// output is

/*
  name: 'Hari',
  lg: 55,
  islg: false
  */


  const userTwo = User("Ram",69, true)

 console.log(userTwo);

 // the output is

 /*
  name: 'Ram',
  lg: 69,
  islg: true
  */
  const userThree = new User("Shyam",44,true)
  console.log(userThree);

  // output is ---> User { name: 'Shyam', lg: 44, islg: true }

  const userFour = new User("Suvam",12,true)
  console.log(userFour);

  // output is 

  // User { name: 'Shyam', lg: 44, islg: true } ( for userThree)
  // User { name: 'Suvam', lg: 12, islg: true }


console.log(userFour instanceof User);// true



function mul(num){
   return num*8
}

mul.power = 7
console.log(mul(8)); // 64

console.log(mul.power); //7




function Person(name) {
    this.name = name;
    console.log(this.name);
  }
  console.log(Person("suvam")); // suvam

// Adding a custom fucntion as the prototype

  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
// Now create a constructor function to inherit the property of the "Person" function.

  const person1 = new Person("John");
  
  person1.sayHello(); // Outputs: Hello, my name is John
