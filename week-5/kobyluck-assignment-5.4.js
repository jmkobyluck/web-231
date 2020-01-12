/*
============================================
; Title:  Kobyluck Assignment 5.4
; Author: Professor Krasso
; Date:   12 January 2020
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

// start program

// declaring my composers array
var composers = [
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

// defining "ratings" map function to return the ratings by composer
var ratings = composers.map(function(composer) {
  return {
    rating: composer.rating,
    composer: composer.lastName
  };
});

// defining "genres" map function to return the genres by composer
var genres = composers.map(function(composer) {
  return {
    genre: composer.genre,
    composer: composer.lastName
  };
});

// output
console.log("-- COMPOSER BY RATING --");

// forEach function outputting the "ratings" map
ratings.forEach(function(composers) {
  console.log("Rating: " + composers.rating);
  console.log("Composer: " + composers.composer);
  console.log("");
});

console.log("-- COMPOSER BY GENRE --");

// forEach function outputting the "genres" map
genres.forEach(function(composers) {
  console.log("Genre: " + composers.genre);
  console.log("Composer: " + composers.composer);
  console.log("");
});

// end program
