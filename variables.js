const accountNumber = 4578124569;
console.log(accountNumber);
//accountNumber = 4583217590;
//console.log(accountNumber); // There is the error because a const cant be changed if assigned once.



var accountName = "Suvam";
//console.log(accountName);
if (2===2){
    accountName = "Surya";
    console.log(accountName);// the value of the variable changes even if we change it in the block or function scope.
    // var is not recommended at all.
}


let city = "Delhi";
city = "Bbsr";
 // city = bbsr

if( 5 === 5){
    city="Puri";
    console.log(city); // the value of vaiable changes.
}

