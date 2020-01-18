/*
============================================
; Title:  Kobyluck Exercise 6.2
; Author: Jonathan Kobyluck
; Date:   17 January 2020
; Modified By: Jonathan Kobyluck
; Description: Exception Handling
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 6.2'));

// Line break
console.log("");


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

// try/catch for rating scale of 1-10
try {
  var rating = 11;

  // if statements determining if rating is valid
  if(rating > 10) throw "RatingTooHigh";
  if(rating < 1) throw "RatingTooLow";

  // rating output
  console.log(rating);

  // catch output
}  catch (err) {
  console.log("Catch clause:" + err);

  // finally output
} finally {
  console.log("Finally clause reached...");
}

// end program
