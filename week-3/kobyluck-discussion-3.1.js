/*
============================================
; Title:  Kobyluck Assignment 3.1
; Author: Jonathan Kobyluck
; Date:   11 December 2019
; Modified By: Jonathan Kobyluck
; Description:
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 3.1'));

/*
  Expected output:

  If age is less than 21, display "You can't drink"

  If age is equal to 21, display "PARTY TIME!"

  If age is greater than 21, display "Back to the real world.."

*/

// Inserting a page break
console.log("")

// Declaring the age variable
// Change the age to explore other outputs
var age = 20


// If statement that determines drinking
// eligibility based on declared age
if (age < 21) {
  console.log('You can't drink');
// "Equal" else statement with different output
} else if (age == 21) {
  console.log('PARTY TIME!'};
// Else statement with a different output
} else {
  console log('Back to the real world..');
}
