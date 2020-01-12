/*
============================================
; Title:  Kobyluck Exercise 5.3
; Author: Professor Krasso
; Date:   11 Janurary 2020
; Modified By: Jonathan Kobyluck
; Description: Object Collections
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Exercise 5.3'));

// Line break
console.log("");

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

// start program


// declaring "composer" variable
var composer = [
  {
    firstName: "Ludwig Van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Anadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
]

// passing "composers" function through ES5 "forEach" outputting "composer string"
composer.forEach(function(composers) {

  // output sentence
  console.log(
    "Last Name: " + composers.lastName + ", Genre: " + composers.genre + ", Rating: " + composers.rating
  );
});

//end program
