function calculateCartPrice(val1, val2, val3, ...rest){  // ...rest/spread is an operator which name do you choose depend on the use cases!
    return rest;
}
// console.log(calculateCartPrice(100, 200, 300,400, 500, 600)); => [ 400, 500, 600 ]

/* 
val1 => 100
val2 => 200
val3 => 300
rest => [400, 500, 600] // It reurns an array.
*/

const user = {
    firstName: "Tarun",
    lastName: "Pal",
    age: 21
};
function handleObject(anyObject){
    console.log(`User's full name is ${anyObject.firstName} and last name is ${anyObject.lastName}!`);
}
// handleObject(user); => User's full name is Tarun and last name is Pal!

// const myNewArray = [200, 400, 600, 800];

// function returnSecondValue(getArray){
//     return getArray[1];
// }
// console.log(returnSecondValue(myNewArray)); => 400

let sum = 0;
const myNewArray = addNumbers([20,40,50,60,70]);
// console.log("Sum is",myNewArray);  => Sum is 240
function addNumbers([...rest]){
    for (let index = 0; index < rest.length; index++) {
        sum = sum + rest[index];
    }
    return sum;
}

/* 
Synchronous JavaScript => All the lines will execute step by step but here you can see
we have been call a function before defining it. It is the exception of the synchromous 
JavaScript.
*/

// All the functions has some reserved memory to store data, you can see an example here:

// function printNumbers(num1, num2, num3){
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// }
// printNumbers(10,20,30);
// printNumbers(10,20,30,40,50); => // You can pass any number of arguments there is no error in JS.

// There is a variable known as arguments that holds rest of the arguments like this.

function printNumbers(){
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}
printNumbers(10,20,30,40,50,60);