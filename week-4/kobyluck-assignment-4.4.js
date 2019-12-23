/*
============================================
; Title:  Kobyluck Assignment 4.4
; Author: Professor Krasso
; Date:   21 December 2019
; Modified By: Jonathan Kobyluck
; Description: Predicates
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 4.4'));

// Line break
console.log("");


// start program

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

// start program


// states array declaration
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

// statesFiltered variable declaration
var statesFiltered = states.filter(state => getState(state, "Iowa"))

// predicate for filter
function getState(states, string) {
  if (states === string) {
    return true;}
}

// output text
console.log("--Original Array--");

// 'for loop' for original array
for (a = 0; a < states.length; a++){
console.log(states[a]);
}

// line break
console.log("");

// output text
console.log("--Sorted Array--");

// 'for loop' output for sorted array
for (a = 0; a < states.length; a++){
console.log(states.sort()[a]);
}

// line break
console.log("");

// output text
console.log("--Selected Value--");

// output for selected value
console.log(statesFiltered[0]);


// end program
