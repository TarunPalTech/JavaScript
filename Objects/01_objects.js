/*************** Objects **************/

// Singleton

// There are two methods to create objects:
// 1. Oject Literals
// 2. Using Constructor

/* 
If you are defining a object using first method then it is not singleton otherwise if
you are using second method then it is singleton.
*/

/* 
Singleton : if your object is singleton then it will be the only object of its kind.
Non-Singleton : If it is not singleton then multiple instances of the object is possible.
*/
// object literal => {key1: value, key2: value} or Using Constructor => Object.create()

// const JsUser = {
//     firstName: "Tarun",
//     lastName: "Pal",
//     age: 21,
//     gender: "male",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Wednesday", "Friday"]
// }; 

// console.log(JsUser);
// console.log(JsUser.firstName); => Tarun
// console.log(JsUser.age); => Pal
// console.log(JsUser.gender); => male
// console.log(JsUser.isLoggedIn); => false
// console.log(JsUser.lastLoginDays); =>[ 'Monday', 'Wednesday', 'Friday' ]

// There is another method to access it:
// console.log(JsUser["firstName"]); => Tarun (Double quotes are compulsary)

// But, why we are using this:
// const obj = {
//     "full name": "Tarun Pal", // It is called JSON
//     "college name": "Invertis Universit Bareilly"
// };
// In this situation, we have only one method
// console.log(obj["full name"]); => Tarun Pal

/* 
If you want to declare a symbol and want to use it as a key then:
*/

// const mySymbol = Symbol("key");

// const myObj = {
//     firstName: "Tarun",
//     [mySymbol]: "Unique Value",
//     lastName: "Pal",
//     age: 21,
//     gender: "male"
// };
// console.log(typeof Object.keys(myObj[mySymbol])); => object

// console.log(myObj.mySymbgol); => undefined
// console.log(myObj[mySymbol]); => Unique Value(This is the only method to access it.)


// const mySymbol = Symbol("key");

// const myObj = {
//     firstName: "Tarun",
//     mySymbol: "Unique Value",
//     lastName: "Pal",
//     age: 21,
//     gender: "male"
// };

// console.log(myObj.mySymbol); => Unique Value(It is not a correct method to use it as a symbol know it is not a symbol.)
// console.log(typeof myObj.mySymbol); => string

/* 
Key Differences Summarized:
Enumeration: String keys are enumerable, while symbol keys are not.

Uniqueness: Symbols are unique and prevent key collisions.

Use Cases: Symbols are useful for meta-properties or keys that shouldn't interfere with other keys.

Symbols are particularly useful when designing libraries or frameworks where you want to ensure that your keys don’t accidentally overwrite or get overwritten by other code.
*/

// How can we add values in an empty object?

// let myObj = {};
// myObj.firstName = "Tarun";
// myObj.lastName = "Pal";
// myObj.age = 21;
// myObj.gender = "male";
// console.log(myObj); => { firstName: 'Tarun', lastName: 'Pal', age: 21, gender: 'male' }

// myObj.course = function(){
//     console.log("CSE student!");
// }
// console.log(myObj.course()); => CSE student

// myObj.myInfo = function(){
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
// }

// console.log(myObj.myInfo()); => Hello, my name is Tarun Pal.
/*
If you want to reference to the same object means if you want to use all the properties
and methods related to the object into the same object then must use this keyword.
*/