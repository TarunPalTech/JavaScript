// Decision Control Statements or Selection Control Statemets

// Comparision Operators => >, <, <=, >=, ==(equal to), !=(not equal to), ===(strict equal), !==

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log(`You logged in successfully!`);
//     // If block executes when a particular condition is true.
// }

// const temperature = 51;
// if(temperature < 50){
//     console.log(`You can go outside!`);
// }
// else{
//     console.log(`You can not go outside!`);
// }

// if(2 == "2"){
//     console.log(`Code executed!`);
// }else{
//     console.log(`Code didn't execute!`);
// }

// if(2 === "2"){
//     console.log(`Code executed!`);
// }else{
//     console.log(`Code didn't execute!`);
// }

// Write a program to check whether a given number is positive, negative or zero!

// const num = 5;
// if(num > 0){
//     console.log(`Number is positive!`);
// }else if(num < 0){
//     console.log(`Number is negative!`);
// }else{
//     console.log(`Number is zero!`);
// }

// you can also use nested if else in JS.

// let score = 200;
// if(score > 100){
//     console.log(`Your score is ${score}`);
// }

// let score = 200;
// if(score > 100){
//     let value = 500;
//     console.log(`Your score is ${score}`);
// }
// console.log(`Value is ${value}`);
// There is an error because we want to access to the score outside of its score.


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedFromEmail = true;

if(userLoggedIn && debitCard){
    console.log(`Allow to buy courses!`);
}

if(loggedFromEmail || loggedInFromGoogle){
    console.log(`You logged in!`);
}