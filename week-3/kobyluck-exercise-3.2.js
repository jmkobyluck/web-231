/*
============================================
; Title:  Kobyluck Assignment 3.2
; Author: Professor Krasso
; Date:   13 December 2019
; Modified By: Jonathan Kobyluck
; Description: Exercise with conditional
; statements.
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 3.2'));

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/


// declaring all test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

// defining the match function and argument parameters
function match(arg1, arg2) {
// conditional statement between arg1 and arg2 parameters
  if (arg1 === arg2)
    return true
  else
    return false
}

// declaring logMismatch and logMatch functions
// assigning the outputs for each function
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

// page break
console.log("");

// output for first conditional statement declaring true false
console.log(match("A", "B"));
console.log(match(2, 2));

// page break
console.log("");

//conditional statements between the test variables
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}

// end program
