/*
============================================
; Title:  Kobyluck Exercise 6.3
; Author: Jonathan Kobyluck
; Date:   16 January 2020
; Modified By: Jonathan Kobyluck
; Description: Object Literals
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 6.3'));

// Line break
console.log("");


// start program

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// object literal for ticket variable
var ticket = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones"
};

// output for ticket object
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requestor: " + ticket.requestor + "}");

// end program
