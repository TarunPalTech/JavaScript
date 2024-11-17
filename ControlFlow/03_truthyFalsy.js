// const userEmail = "platarun832@gmail.com";
// console.log(Boolean(userEmail)); => true

// const userEmail = "";
// console.log(Boolean(userEmail)); => false

const userEmail = [];
// console.log(Boolean(userEmail)); => true

// Falsy values=> false, "", null, undefined, 0, -0, BigInt - 0n, NaN

// true, "false", "null", "undefined", " ", function(){}---Empty function, [], {}, "0"

// How can you check array is empty?

// let myArray = [];
// if(myArray.length === 0){
//     console.log(`Array is empty!`);
// }else{
//     console.log(`Array have ${myArray.length} elements!`);
// }

// How to check an object is empty or not?

// const myObj = {

// };
// if(Object.keys(myObj).length === 0){
//     console.log(`Your object is empty!`);
// }


// console.log(false == 0); => true
// console.log(false == ""); => true
// console.log(false == ''); => true
// console.log(false == null); => false
// console.log(false == undefined); => false

// Nullish Coalescing operator (??) => null , undefined

// let val1 = 5 ?? 10;
// console.log(val1); => 5

// let val2 = null ?? 10;
// console.log(val2); => 10

// let val3 = undefined ?? 10;
// console.log(val3); => 10

// let val4 = null ?? 10 ?? 20;
// console.log(val4); => 10

// Ternary Operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice>100?console.log(`More than 100!`):console.log(`Less than or equal to 100!`);

