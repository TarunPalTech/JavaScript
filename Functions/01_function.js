function toPrintMyInfo(){  // Declarative function
    console.log("My name is Tarun Pal!");
    console.log("I am from Bareilly, Uttar Pradesh!");
}

// toPrintMyInfo; => it is called reference of the function.
// toPrintMyInfo(); => Function Call

// Write a function to add to numbers.

// function addTwoNumbers(num1, num2){ // function Parameters
//     console.log(num1 + num2);   
// }
// addTwoNumbers(3, 4); =>7  // function arguments
// addTwoNumbers(3, null); => 3
// console.log(3, "a"); =>3 a
// We can fix it using decision control statements....

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
//     console.log("Numbers must be integers!");
//     // This line will never be execute!
//     // Because when return executes then program ends!
// }
// let result = addTwoNumbers(3, 4);
// console.log("Result: ",result); => Result:  7

// function userLoginMessage(userName){
//     return `${userName} just logged in!`;
// }
// console.log(userLoginMessage("Tarun Pal")); => Tarun Pal just logged in!
// console.log(userLoginMessage("")); => just logged in!
// console.log(userLoginMessage()); => undefined just logged in!

// function userLoginMessage(userName){
//     if(userName == undefined){
//         console.log("Please enter a user name!");
//         return;
//     }
//     return `${userName} just logged in!`;
// }
// console.log(userLoginMessage());
// console.log(userLoginMessage("Tarun Pal"));

// Another method to write it is:

function userLoginMessage(userName){
    if(!userName){
        console.log("Please enter a user name!");
        return;
    }
    return `${userName} just logged in!`
}
console.log(userLoginMessage("Tarun Pal"));
console.log(userLoginMessage());
