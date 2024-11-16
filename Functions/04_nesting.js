// function One(){
//     const userName = "Tarun";
//     function Two(){
//         const website = "Amazon";
//         console.log(userName);
//     }
//     // console.log(website);  // Local variable we can access ito outside the body on function.
//     Two();
// }
// One();

/* 
Child function can access the data of the parent function but parent function can never
be use the data of child function(It's called closer).
*/

// if(true){
//     const firstName = "Tarun";
//     if(firstName === "Tarun"){
//         const lastName = "Pal";
//         console.log(firstName + lastName);
//     }
//     // console.log(lastName);  // error => lastName is not defined.
// }
// console.log(firstName);  // firstName is not defined.(Outside of its scope.)


/*********** There are two ways to define decalarative functions . ************/

// First Method
// console.log(addOne(5));  // You can use it here means you can call it before declaration.

function addOne(num1){
    return num1 + 1;
}
// console.log(addOne(5));

// Second Method

// console.log(addTwo(5)); // You cann not call it here(Concept of hoisting).
const addTwo = function(num2){
    return num2 + 2;
}
console.log(addTwo(5));