/*
============================================
; Title:  Kobyluck Exercise 5.2
; Author: Professor Krasso
; Date:   11 Janurary 2020
; Modified By: Jonathan Kobyluck
; Description: ES5 Built-in Functions
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 5.2'));

// Line break
console.log("");


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

// delcaring food variable
var food = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

// passing "foods" function through ES5 "forEach" function output "food" string
food.forEach(function(foods) {
  // output
  console.log(foods);
});
