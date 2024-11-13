const accountId = 123456;
let accountEmail = "paltarun832@gmail.com";
var accountPassword = "github@123";
let accountState; // Uninitialized variable(undefined) 
accountCity = "Lucknow"; // Not a good way.

/* 
Prefer not to use var because of issue in block scope or functional scope.
*/

// accountId = 789123; Not allowed(You can not change a constant value.)
// Output => Error

// accountEmail = "palt48305@gmail.com";
// console.log(accountEmail);
// Output => palt48305@gmail.com


// accountPassword = "2123455";
// console.log(accountPassword);
// Output => 2123455

// console.log(accountState);
// Output => undefined
// You can assign undefined directly to it...
// let accountState = undefined;

// accountCity = "Jodhpur";
// console.log(accountCity);

/* If you want to print all the variables then there are two different methods */


// first method
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);

// second method
// console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);

