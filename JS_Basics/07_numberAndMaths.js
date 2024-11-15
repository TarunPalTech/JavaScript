const score = 1200;
// console.log(score);
// console.log(typeof score); => number
// In case of JS, there is no need to bind variables with a specific data type. But, it doesn't mean that it will not be declare. It will be declare internally.

const balance = new Number(6500000);
// console.log(typeof balance); => object

// console.log(balance.toString().length); => 7

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); 124

const otherNumber = 1123.3966;
// console.log(otherNumber.toPrecision(4)); => 1123(It provides round values.)

const hundreds = 10000000;
// We have problem to calculate these zeroes so there is a function that helps us to do this task easily.
// console.log(hundreds.toLocaleString('en-US')); // 'en-IN'
// console.log(typeof hundreds.toLocaleString('en-US')); // 'en-IN'

/* Math Object */

// console.log(Math); => Object [Math] {}
// console.log(Math.abs(-4)); => Answer is 4 and it is used to get absolute value means negative to positive.
// console.log(Math.abs(4)); => 4

// console.log(Math.round(3.9)); => 4
// console.log(Math.round(3.4)); => 3

// console.log((Math.ceil(3.4))); => 4
// console.log(Math.floor(3.4)); => 3

// console.log(Math.random()); It provides values between 0 and 1.
// If you want values that should be more than 1 then multiply it by 10.
// console.log(Math.random()*10); => // 0.0357*10 It would be less than 1 so add 1 in it.
// console.log((Math.random()*10)+1); => Always greater than or equal to one.

// If you want to generate a number between two numbers then:

// const min = 1;
// const max = 6;
// console.log(Math.floor(Math.random()*(max-min)+1)+min);

