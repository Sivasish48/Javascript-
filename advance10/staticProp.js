// Let say 
// In mongo DB a user details get saved a new id is created.
// That created user Id is not used agaib=n for any  user in that paricular inheritated class

// That is why to stop to use the property , a keyword is called static

/*
class Name {
    constructor(name){
        this.name = name
    }
     logMe(){
        console.log(`${this.name}, welcome.`);
     }

     createId(){
        console.log(Math.floor(Math.random()*10000)); 
     }
}

const newC = new Name("Suvam")
newC.logMe()  // Suvam, welcome.

newC.createId()    // 6141

*/

class Name {
    constructor(name){
        this.name = name
    }
     logMe(){
        console.log(`${this.name}, welcome.`);
     }
     static createId(){
        console.log(Math.floor(Math.random()*10000)); 
     }
}

const newC = new Name("Suvam")
newC.logMe()  

newC.createId() // it results error|

// The static keyword didnot allow to generate an id for the same inherited element.

// It heavily depends upon use cases
