/*
============================================
; Title:  kobyluck-exercise-2.3.js
; Author: Professor Krasso
; Date:   7 December 2019
; Modified By: Jonathan Kobyluck
; Description: Displaying function properties
;===========================================
*/

// Require statement that imports my header file
const header = require('./kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Kobyluck Exercise 2.3'));


/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello Johnny Kobyluck!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// Function property definition
myName.johnny = "Johnny Kobyluck!";

// Returning the value assigned to the function property
function myName() {
  return myName.johnny;
}

// Output
// Calling the console log to display my formatted function
console.log('Hello', myName());
