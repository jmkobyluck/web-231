/*======================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date; 25 November 2019
; Modified By: Jonathan Kobyluck
; Description: Creating output of 3 
; employee cards using JavScript
; ======================================
*/

//start program


/*
    Expected output:

    3 employee cards consisting of the following:

    First name
    Last name
    Address
    Pay rate
    Hire date
*/

//variable assignment
var employeeOneFirstName = "John";
var employeeOneLastName = "Smith";
var employeeOneAddress = "123 Grove St";
var employeeOnePayRate = 10.75;
var payRateOne = employeeOnePayRate.toFixed(1);
var employeeOneHireDate = new Date(2014, 1, 4);
var hireDateOne = employeeOneHireDate.toLocaleDateString();

var employeeTwoFirstName = "Jane";
var employeeTwoLastName = "Doe";
var employeeTwoAddress = "456 Straight Ln";
var employeeTwoPayRate = 9.56;
var payRateTwo = employeeTwoPayRate.toFixed(1);
var employeeTwoHireDate = new Date(2016, 8, 13);
var hireDateTwo = employeeTwoHireDate.toLocaleDateString();

var employeeThreeFirstName = "Joe";
var employeeThreeLastName = "James";
var employeeThreeAddress = "789 Life Cir";
var employeeThreePayRate = 14.39;
var payRateThree = employeeThreePayRate.toFixed(1);
var employeeThreeHireDate = new Date(2008, 3, 9);
var hireDateThree = employeeThreeHireDate.toLocaleDateString();


//output
console.log(employeeOneFirstName); 
console.log(employeeOneLastName);
console.log(employeeOneAddress);
console.log(payRateOne);
console.log(hireDateOne);

console.log(employeeTwoFirstName);
console.log(employeeTwoLastName);
console.log(employeeTwoAddress);
console.log(payRateTwo);
console.log(hireDateTwo);

console.log(employeeThreeFirstName);
console.log(employeeThreeLastName);
console.log(employeeThreeAddress);
console.log(payRateThree);
console.log(hireDateThree);

//end program