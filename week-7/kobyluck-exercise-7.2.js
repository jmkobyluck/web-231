/*
============================================
; Title:  Kobyluck Exercise 7.2
; Author: Professor Krasso
; Date:   26 January 2020
; Modified By: Jonathan Kobyluck
; Description: Constructor Functions
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 7.2'));

// Line break
console.log("");


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// declaring EmployeeLog array
var employees = [
  new EmployeeLog(1, "Thomas", "Edison", "Software Engineer"),
  new EmployeeLog(2, "Benjamin", "Franklin", "Programmer"),
  new EmployeeLog(3, "Nikola", "Tesla", "Project Manager"),
  new EmployeeLog(4, "Charles", "Babbage", "Product Manager"),
  new EmployeeLog(5, "Alexander", "Bell", "Business Analyst")
];

// constructor object function
function EmployeeLog(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// loop to output the data from EmployeeLog array
employees.forEach(function(employee) {
 console.log(employee.id + " " +employee.firstName + " " + employee.lastName + " " + employee.title);
});


// end program
