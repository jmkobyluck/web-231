/*
============================================
; Title:  Kobyluck Discussion 5.1
; Author: Jonathan Kobyluck
; Date:   9 Janurary 2020
; Modified By: Jonathan Kobyluck
; Description: Advanced Arrays
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Discussion 5.1'));

// Line break
console.log("");


// start program

/*
  Expected output

  Johnny Kobyluck
  Discussion 5.1
  Date: (Current Date)

  Anne is 14 years old!
  Jimmy is 16 years old!
  Julia is 15 years old!

  This class has 3 students.
*/

// defining students map
var student = new Map();

// inserting and modifying values for students map
students.set('Oliver', '15');
students.set('Anne', '14');
students.set('Jimmy', '16');
students.delete('Oliver');
students.add('Julia', '15');

// loop to return an array for each iteration
for (var [key, value] students) {
  console.log(key + ' is ' + value + ' years old!');
};

// line break
console.log('')

// output
console.log('This class has ' + students.size + ' students.');
