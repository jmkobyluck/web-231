/*
============================================
; Title:  Kobyluck Discussion 4.1
; Author: Professor Krasso
; Date:   19 December 2019
; Modified By: Jonathan Kobyluck
; Description: Arrays
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
  Expected Output:

  Johnny Kobyluck
  Discussion 4.1
  Today's Date

  The primary colors backwards are purple,blue,green,yellow,orange,red.
*/

// declaring the "colors" array.
var colors = ["red", "black", "yellow", "green", ""];

// inserting "orange" in place of "black" in my "colors" array.
colors.slice(1, "orange");

// adding 2 more colors to the "colors" array.
colors.push("blue", "purple");

// flipping the "colors" array in reverse order.
colors.reverse;

// displaying my "Expected Output".
console.log("The rainbow backwards is " + colors +".");

