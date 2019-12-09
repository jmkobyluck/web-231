/*
============================================
; Title:  Kobyluck Assignment 2.4
; Author: Professor Krasso
; Date:   7 December 2019
; Modified By: Jonathan Kobyluck
; Description:
;===========================================
*/

// Require statement that imports my header file
const header = require('./kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 2.4'));

/*
  Expected output:

  Johnny Kobyluck
  Assignment 2.4
  Today's Date

  Hello my name is Johnny Kobyluck!

  Today's date is <today's date> and the current temperature is 33.6 degrees.

  I am 29 years old and my savings account goal is 500 dollars.
*/

// Variable declaration
var currentDate = new Date();
var savings = convertToFloat("500")
var age = convertToInt("29")

// Defining the functions to achieve expected output
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
};

function dateWriter(year, month, day) {
  return month+1 + "/" + day + "/" + year;
};

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
};

function convertToInt(intString) {
  return parseInt(intString);
};

function convertToFloat(floatString) {
  return parseFloat(floatString);
};

// Formatting the expected output
console.log("\n Hello my name is "+fullName("Johnny", "Kobyluck") + "!");

console.log("\n Today's date is " +
  dateWriter(currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate()) + " and the current temperature is 33.6 degrees.");

// Adding a line break
console.log(" ")

console.log("I am " + age + " years old and my savings account goal is " + savings + " dollars")
