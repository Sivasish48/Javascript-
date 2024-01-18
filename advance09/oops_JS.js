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

