"use strict" // treat all JS code as newer version

// alert(3+3); // ReferenceError
// Output => alert is not defined
// Because, we are using node.js not browser

/* Following code isn't more readable. */
// console.log("Tarun");    console.log("Pal"); 

// console.log(
//     3
//     +
//     3
// ); Not a good practice.

// console.log(
//     "Tarun"
//     +
//     " "
//     +
//     "Pal"
// ); Not a good practice.

// console.log(3+3); Output => 6
// console.log("Tarun Pal"); Output => Tarun Pal

/* Data Types */

let name = "Tarun"; // string
let age = 20; // number
let isLoggedIn = true; // boolean

// number = 2 to the power 53
// bigint
// string => You can use either single quote or double quotes.
// boolean => true or false
// null => stand alone value or representation of an empty value.
// undefined => when value is not assigned.
// Symbol => used to make something unique
// Object

// console.log(typeof "Tarun Pal"); => string
// console.log(typeof null); => object
// console.log(typeof undefined); => undefined

/* 
There are total 8 data types in JS like Primitive and Non-Primitive...
Primitive(Heap)
Non-Primitive(Stack)

    1. String
    2. Boolean
    3. Number
    4. BigInt
    5. Undefined
    6. Null
    7. Symbol
    8. Objects
*/

const value = [1, 2, 3, 4, 5];
// console.log(typeof value);  => object
// Arrays are the special kinds of objects.

let myObj = {
    fullName: {
        firstName: "Tarun",
        lastName: "Pal"
    },
    age: 20,
    mobileNumber: 1234567892,
    state: "Uttar Pradesh",
    country: "India"
};
// console.log(typeof myObj);  =>  object
