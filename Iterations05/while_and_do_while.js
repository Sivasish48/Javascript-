// WHILE LOOP

//The while loop loops through a block of code as long as a specified condition is true.

let acces = ['pen','pocket','purse','pencil']

let i = 0
 while (i<=acces.length) {
    console.log(`acces are ${acces[i]}`);
   i = i+1    
 }
 /*
 acces are pen
acces are pocket
acces are purse
acces are pencil
*/

// DO WHILE LOOP

// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

let score = 100

do {
    console.log(`The score is ${score}`);
    score = score+5
} while (score <= 200);

/*

The score is 100
The score is 105
The score is 110
The score is 115
The score is 120
The score is 125
The score is 130
The score is 135
The score is 140
The score is 145
The score is 150
The score is 155
The score is 160
The score is 165
The score is 170
The score is 175
The score is 180
The score is 185
The score is 190
The score is 195
The score is 200

*/

