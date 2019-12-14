/*
============================================
; Title:  Kobyluck Assignment 3.3
; Author: Professor Krasso
; Date:   13 December 2019
; Modified By: Jonathan Kobyluck
; Description: Exercising switch statements
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 3.3'));

// Line break
console.log("")


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// declaring the eventKeyCode
let eventKeyCode = 13

// switch block containing the conditional statements
switch (eventKeyCode) {
  case 13:    // when the eventKeyCode is 13, display the following
    console.log('The enter key was pressed.');
    break;
  case 16:    // when the eventKeyCode is 16, display the following
    console.log('The shift key was pressed.');
    break;
  case 32:    // when the eventKeyCode is 32, display the following
    console.log('The spacebar key was pressed.');
    break;
  case 8:     // when the eventKeyCode is 8, display the following
    console.log('The backspace / delete key was pressed.');
    break;
  default:    // when the eventKeyCode is other key, display the following
    console.log('Unrecognized key.');
    break;
}

// end program
