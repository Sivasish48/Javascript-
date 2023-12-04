//The switch statement is used to perform different actions based on different conditions.
 const x = 45;
switch (x) {
    case 20:
        console.log(`20 is the number`);
        break;
        case 45:
            console.log(`45 is the number`);
            break;
    default:
        console.log(`there is no number.`);
        break;
}
// 45 is the number


// The value of the expression is compared with the values of each case.

//If there is a match, the associated block of code is executed , If there is no match, the default code block is executed.


// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

//It is not necessary to break the last or default  case in a switch block. The block breaks (ends) there anyway.

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default keyword specifies the code to run if there is no case match:

// The default case doesnot have to be the last case in a switch block.

let numb = [45,4,5,6,"kjh"]
switch (numb.length) {
    default:
      console.log("Looking forward to the Weekend"); 
      break;
    case 6:
       console.log("Today is Saturday");
      break;
    case 1:
      console.log("Today is Sunday");
      break;
      case 2:
      console.log("hiiii");
      break;
      case 5:
        console.log("yess got it");
  }
  /*
  NOTE
  If multiple cases matches a case value, the first case is selected.

  If no matching cases are found, the program continues to the default label.

   If no default label is found, the program continues to the statement(s) after the switch.

   */

   // STRICT COMPARISION IN SWITCH (===)

   // Switch cases use strict comparison (===).

   //The values must be of the same type to match.


   let k = "0";
switch (k) {
  case 0:
   console.log("Off");
    break;
  case 1:
  console.log("On");
    break;
  default:
    console.log("No value found");
} // No value found
