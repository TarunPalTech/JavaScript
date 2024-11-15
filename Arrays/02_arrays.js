/* push() and pop() */

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];

// num1.push(num2); => It adds the whole array as a single element.
// console.log(num1); => [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// let newNum = num1.concat(num2);
// console.log(newNum);
/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
] 
*/

// spread operator[...variableName]

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 10];
// let newArr = [...num1, ...num2]; => The basic difference between spread operator and concat() method is spread method can work with multiple arrays or objects but concat has limitaions, it can only work with 2 different arrays.
// console.log(newArr);
/* 
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

const arr = [1 , 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
/* 
If you want to convert all the arrays(elements) like this:
[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] then use float() method.
*/

// let newArr =  arr.flat();
// console.log(newArr); => [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
/* 
You can pass any of the value in flat method like 1, 2, 3 and infinity. If you are not
going to pass anything then the default value is 1 but if you are passing any value
then it's a good practice.
*/

// let newArr = arr.flat(Infinity);
// console.log(newArr);

// Method to check your object is an array or not.
// console.log(Array.isArray("ViratKohli")); => false

// Methos to convert object into array
// console.log(Array.from("SachinTendulkar"));
/* 
[
  'S', 'a', 'c', 'h',
  'i', 'n', 'T', 'e',
  'n', 'd', 'u', 'l',
  'k', 'a', 'r'
]
*/

let myObj = {
    firstName: "Tarun",
    lastName: "Pal",
    age: 21,
    gender: "male"
};
// console.log(Array.from(myObj)); => [] 
/*
It gives an empty array because here you are not specified that 
you want to convert it using keys or values.
*/

// If you want to convert it using keys or value then the method is:
// console.log(Array.from(Object.keys(myObj))); =>[ 'firstName', 'lastName', 'age', 'gender' ]
// console.log(Array.from(Object.values(myObj))); => [ 'Tarun', 'Pal', 21, 'male' ]

// Array.of() Method

let val1 = 1;
let val2 = 2;
let val3 = 3;
let val4 = 4;
let val5 = 5;
let val6 = 6;
// console.log(Array.of(val1, val2, val3, val4, val5, val6)); => [ 1, 2, 3, 4, 5, 6 ]
