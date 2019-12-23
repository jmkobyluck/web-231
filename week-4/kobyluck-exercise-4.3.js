/*
============================================
; Title:  Kobyluck Exercise 4.3
; Author: Professor Krasso
; Date:   21 December 2019
; Modified By: Jonathan Kobyluck
; Description: Filtering Exercise
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 4.3'));

// Line break
console.log("");


// start program

/*

Expected output:

FirstName LastName
Exercise 4.3
Today's Date

-- DISPLAYING ARRAY ITEMS --
Car
Truck
Motorcycle
Airplane
Bus

-- SELECTED VALUE --
Motorcycle

-- SELECTED VALUE --
Bus

*/

// declaring the "vehicles" variable array
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

// defining the "getValue" function
// returning a filtered value from the array
function getValue(arr, val) {
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] === val)
      console.log(arr[k]);
  }
}

// output

// specified text output
console.log("-- DISPLAYING ARRAY ITEMS --");

// output for the declared vehicles array
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}

// line break
console.log("");

// specified text output
console.log("-- SELECTED VALUE --");

// output for selected value
getValue(vehicles, "Motorcycle");

// line break
console.log("");

// specified text output
console.log("-- SELECTED VALUE --");

// output for selected value
getValue(vehicles, "Bus");

// end program
