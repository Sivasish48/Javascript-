// Now let us run for of loop in a map object

let students = new Map([
    ['sunil',"112"],
    ['sidharth',"093"],
    ['suvam',"125"]
])


for (const key of students) {
    console.log(key);
}

/*
[ 'sunil', '112' ]
[ 'sidharth', '093' ]
[ 'suvam', '125' ]
*/

// If we want to show the individual elements in the terminal then

for (const [key,value] of students) {
    console.log(`${key} :-> ${value}`);
}
/*
sunil:->112
sidharth:->093
suvam:->125
*/

// Lets apply the for of loop in an object with "key" and "value" keyword


const newObj = {
    'game1' : "pop",
    'game2' : "GTA",
    'game3' : "nfs"
}

for (const [key,value] of newObj) {
    console.log(`${key} -->> ${value}`);
    
} // newObj is not iterable
