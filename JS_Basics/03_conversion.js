/* 
let score1 = 33;
console.log(typeof score1);  // number
console.log(typeof(score1));  // number
 */
 
// let score2 = "33";
// console.log(typeof score2);  // string

// console.log(typeof Number);  // function(Function Object)
// console.log(typeof number);  // undefined

// let score = 33;
// let valueInNumber = Number(score);  // here Number is a function.
// console.log(typeof valueInNumber);  // number

// let score = "33abc";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber);  // NaN

// let score = null;
// let valueInNumber = Number(score);
// console.log(typeof score); // object
// console.log(valueInNumber); // 0

// let score = undefined;
// let valueInNumber = Number(score);
// console.log(typeof score);  // undefined
// console.log(valueInNumber);  // NaN

// let score = true;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber);  // 1

// "33" => 33
// "33abc" => NaN(But data type is number!)
// true => 1
// false => 0

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  // true

// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  // false

// 1 => true
// 0 => false
// "" => false
//  "Tarun" => true;

let score = 33;
let stringToNumber = String(score);
console.log(stringToNumber);  // 33
console.log(typeof stringToNumber);  // string

/* Operations */

// console.log(2+2); => 4
// console.log(2-2); => 0 
// console.log(2-5); => -3 
// console.log(2*3); => 6
// console.log(2**3); => 8
// console.log(2/3); => 0.6666666666666666
// console.log(3%4); => 3
// console.log(-3%4); => -3
// console.log(-3%-4); => -3
// console.log(3%-4); => 3

// let str1 = "Tarun";
// let str2 = "Pal";
// let str3 = str1 + " " + str2;
// console.log(str3);

// console.log("1"+2); => 12
// console.log(1+"2"); => 12
// console.log("1"+2+2); => 122
// console.log(1+2+"2"); => 32
// console.log(((3+4)*5)%4); => Good way to write confusing statement.
// console.log(true); => true
// console.log(+true); => 1
// console.log(true+); => Syntax error
// console.log(+""); => 0
// console.log(""); => Syntax error
// num1 = num2 = num3 = 2+2 => Not a good way.
// type of NaN is number.

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);