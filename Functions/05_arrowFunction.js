/* **************Arrow Function************* */

// JS introduced it in ES6(2015)

// const user = {
//     userName: "Tarun Pal",
//     fees: 1999,
//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to our website!`);
//         // this keyword is used to refer the current context
//     }
// }
// user.welcomeMessage();

// user.userName = "Ravi Gangwar"; // we are changing the current context!
// user.welcomeMessage();

// We know that this is used to refer the current context in an environment like inside an object.

// const user = {
//     userName: "Tarun Pal",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.userName} , welcome to our website!`);
//         // this keyword is used to refer the current context
//         console.log(this);
//     }
// }
// user.welcomeMessage();

/* 
Output=>
{
  userName: 'Tarun Pal',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// console.log(this); => {}
/* 
Now the current context is an empty object because we are in the node environment because 
we don't have any context in global. But if you are going to perform the same task in the
browser then there is an global object exists(window object).
*/

// function myInfo(){
//     // console.log(this); // Here, it refers to an global object.
//     let userName = "Tarun";
//     console.log(this.userName);  // undefined => it works only in the context of object.      
// }
// myInfo()

/* const myInfo = function(){
    let userName = "Tarun Pal";
    console.log(this.userName); // undefined
}
myInfo(); */

// const myInfo = () => {
//     let userName = "Tarun Pal";
//     console.log(this); // {}
//     console.log(this.userName); // undefined
// }
// myInfo()

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }
// console.log(addTwo(3,4));

/* ***********Implicit Return*********** */

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// console.log(addTwo(3,4));

// Another method to use it is =>

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3,4));

/*  
Implicit return means when you are writing only one statement then 
there is no need to write return keyword but if you are going to use {} 
then you should write return keyword.
*/

// But if you are going to return an object like this then what should be done?

/* const addTwo = (num1, num2) => {userName: "Tarun Pal"}; // undefined
console.log(addTwo(3,4)); */

/* const addTwo = (num1, num2) => ({userName: "Tarun Pal"}); // This is the method to return an object
console.log(addTwo(3,4)); */

// What is the difference between declarative function or arrow function?
/* 
Declarative function is global object but arrow function is local object.
*/