// FOR IN LOOP

//The JavaScript for in statement loops through the properties of an Object.

// This loops iterates through an object to acces its keys and their values

let myObj = {
    'college1' : "GIET",
    'college2' : "GIFT",
    'college3' : "KIIT"
}

for (const key in myObj) {
    console.log(key);
}
/*
college1
college2
college3
*/

// Though this we can get the keys

for (const key in myObj) {
     console.log(myObj[key]);
}
/*
GIET
GIFT
KIIT
*/
// This is how we can get the values of the keys.

// Now to get the both things

for (const key in myObj) {
    console.log(`${key} has the value of ${myObj[key]}`);
}

/*
college1 has the value of GIET
college2 has the value of GIFT
college3 has the value of KIIT
*/

//NOTE>>>> AND we cant apply for in loop in map 
