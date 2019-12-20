/*
============================================
; Title:  Kobyluck Exercise 4.2
; Author: Professor Krasso
; Date:   19 December 2019
; Modified By: Jonathan Kobyluck
; Description: Arrays Exercise
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Discussion 4.1'));

// Line break
console.log("");


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

// declaring the "fruit" array
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function defining "getFruit"
function getFruit(arr) {
  for (var k = 0; k < arr.length; k++) {
    console.log(arr[k]);
  }
}

// calling the getFruit function
getFruit(fruit);

// end program
