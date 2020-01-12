/*
============================================
; Title:  Kobyluck Assignment 5.4
; Author: Professor Krasso
; Date:   11 Janurary 2020
; Modified By: Jonathan Kobyluck
; Description: Filtering/Reducing
; Complex Data Structures
;===========================================
*/

// Require statement that imports my header file
const header = require('../week-2/kobyluck-header.js');

// Calling the console log function to display my header
console.log(header.display('Johnny', 'Kobyluck', 'Assignment 5.4'));

// Line break
console.log("");

/*
  **Expected output**

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/

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
];

var ratings = composer.map(function(composers) {
  return composers.rating
});

console.log("-- COMPOSER BY RATING --");

ratings.forEach(function(rating, lastName) {
  console.log("Rating: " + rating);
  console.log("Composer: " + lastName);
});
