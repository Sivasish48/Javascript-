// What is Promise in js

// "Producing code" is code that can take some time

//"Consuming code" is code that must wait for the result

// A promise is an object that links the producing code and  consuming code.

// A javascript promise is an object of 3 states

// ===> Pending --> While a Promise object is "pending" (working), the result is undefined. then()
// ===> Fulfilled ---> When a Promise object is "fulfilled", the result is a value. finally()
// ===> Rejected ---> When a Promise object is "rejected", the result is an error object. catch()

// There was a library called Bluebird which was composed of promises and other asynchronous features and it was integrated with ES6 later on.

// let us see some examples of promises

// Example = 1


// there are basically two parts in promises --->>> Resolve and reject
const promiseOne = new Promise( (resolve,reject) => {
    // Do an async code
    // Example of real world applications
    // --> Db calls, Cryptography, network

    setTimeout(()=>{
       console.log("the program is executed");
       resolve()
    }, 2000)

})

    promiseOne.then(()=>{
        console.log("yes the execution is completed");
    })

    // the program is executed
    // yes the execution is completed

    // resolve as a parameter and resolve() as a method has directly connected to the then()
    // The then() is the consuming part of the promise 
    // The then() will be executed once the resolve() method is called in the callback function of the promise production part.


    // Example= 2
 

    // The promise object can be run without a variable, which brings the chaining code
    new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log("Async Task 2 is completed");
            resolve()
          },3000)
    }).then(()=>{
        console.log("yes the task 2 is resolved");
    })

    // Async Task 2 is completed
    // yes the task 2 is resolved

    // Example = 3

    const theUser = {
        "username":"Sivasish",
        "email": "sivExample@gmail.com",
        "socials":["X","Linkedin","FB"]
    }

   // Now we can also pass the pre-created object or ready-made object in the resolve()

    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("The user's informations are shown below");
           resolve(theUser)
        },2000)
    }).then((user)=>{
       console.log(user);
    })

    /*
    The user's informations are shown below
{
  username: 'Sivasish',
  email: 'sivExample@gmail.com',
  socials: [ 'X', 'Linkedin', 'FB' ]
}
*/

// Example = 4  

 const cars = {
    "Mostly purchased":"TATA",
    "Moderatedly Purchased": "KIA",
    "lesspurchased": ["TOYOTA","MAHINDRA","HYUNDAI"]
 }

new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log('The available brand are shown below');
    resolve(cars)
   },2000)
}).then((e)=>{
  console.log(`Most sells are of the brand ${e["Mostly purchased"]}`);
  console.log(`Moderately  sells are of the brand ${e["Moderatedly Purchased"]}`);
  console.log(`Less sells are of the brand ${e.lesspurchased[0]},${e.lesspurchased[1]},${e.lesspurchased[2]}`);
})

/*
Most sells are of the brand TATA
Moderately  sells are of the brand KIA
Less sells are of the brand TOYOTA,MAHINDRA,HYUNDAI
*/

// Example = 5

/*
new Promise((resolve,reject)=>{
    let err = true
    if(err){
       resolve({number:45, total:100})
    } 
    else{
        reject(`The updation can't be completed)
    }
}).then((nums)=>{
    console.log(`The auction money is ${nums.number}`);
    //return ${nums.total}
}).catch((error)=>{
    console.log(error);
})
//The auction money is 45
*/

// Example = 6

// Here the resolve method () and the catch() will come to play
new Promise((resolve,reject)=>{
    let err = false
    if(err){
       resolve({number:45, total:100})
    } 
    else{
        reject(`The updataion can't be completed`)
    }
}).then((nums)=>{
    console.log(`The auction money is ${nums.number}`);
   
}).catch((error)=>{
    console.log(error);
})

// The updation can't be completed



// Example = 7



new Promise((resolve,reject)=>{
    let err = false
    if(err){
       resolve({number:45, total:100})
    } 
    else{
        reject(`The updataion can't be completed`)
    }
}).then((nums)=>{
    console.log(`The auction money is ${nums.number}`);
    return nums.number // So here if we use the return keyword then it will store the return value. For that, we have to create another then() like chaining way.
}).then((numb)=>{      // Like this way
    console.log(numb); 
}).catch((error)=>{
    console.log(error);
}).finally("The auction results are finished showing.")
// The code in the finally() defines the end message irrespective of the results.


// Example =7

// There is another way to execute the program with the promise object

// With the async and await keyword

// These are mostly used like the then() and the catch()

// But it does not have the catch() or similar type of method where it can catch the error

// These are mostly used for the backend responses

// Once the response is there the code will be executed


const newProm = new Promise ((resolve,reject)=>{
    let er = false
    if(er){
        resolve({name:"sivasish",age:45})
    } else{
        reject("the data can't be accessed")
    }
})

const consumeProm = async ()=>{
     const resp = await newProm
     console.log(resp);
}

 

// There is also another way to catch the error while using async and await

const newProm = new Promise ((resolve,reject)=>{
    let er = true
    if(er){
        resolve({name:"sivasish",age:45})
    } else{
        reject("the data can't be accessed")
    }
})

const consumeProm = async ()=>{
    try {
        const resp = await newProm
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
     
}
consumeProm()

//  {name:"sivasish",age:45}

// if er = false -- output will be = the data can't be accessed

