/*
============================================
; Title:  Kobyluck Assignment 3.4
; Author: Professor Krasso
; Date:   15 December 2019
; Modified By: Jonathan Kobyluck
; Description: Loops
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 3.4'));

// Line break
console.log("")


// start program

/*
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

 // title of loop program
console.log("-- DO THE NUMBERS MATCH GAME --")

// declaring variables
var myRandomNumber = 6;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// defining the match function and argument parameters
function match(arg1, arg2) {
  // conditional statement between arg1 and arg2 parameters
    if (arg1 === arg2) {
      logMatch(arg1, arg2);
    } else {
      logMismatch(arg1, arg2);
    }
  }

// declaring logMismatch and logMatch functions
// assigning the outputs for each function
function logMismatch(arg2, arg1) {
  console.log(arg2 + " does not match " + arg1 + " !");
}

function logMatch(arg2, arg1) {
  console.log(arg2 + " does match " + arg1 + " !");
}

// loop statement for randomNumber to generate
for (var x = 0; x < 10; x++){
  var number = randomNumber();
  if (number === myRandomNumber) {
    logMatch(myRandomNumber, number);
  } else {
    logMismatch(myRandomNumber, number);
  }
}
