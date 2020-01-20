/*
============================================
; Title:  Kobyluck Assignment 6.4
; Author: Professor Krasso
; Date:   19 January 2020
; Modified By: Jonathan Kobyluck
; Description: Nested Object Literals
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 6.4'));

// Line break
console.log("");


// start program

/*
  Expected Output

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// ticket object
var ticket = {
  id: 105,

  // nested name object
  name: {
    id: 99,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  },

  // assigning today's date
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 1
}

// output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.name.firstName + " " + ticket.name.lastName + " (" + ticket.name.jobTitle + ").")

// end program
