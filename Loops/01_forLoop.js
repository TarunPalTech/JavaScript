// For Loop

// Syntax of for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Write a program to print first 10 whole numbers.

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Write a program to print first 5 even numbers.

// for (let i = 1; i <= 10; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Nested loop

// for (let i = 1; i <= 10; i++){
//     console.log(`Table of ${i}!`);
//     for (let j = 1; j <= 10; j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// let myFavCricketers = ["Rahul Dravid", "Sachin Ramesh Tendulkar", "Virat Kohli", "Rishabh Pant", "Shreyas Iyyer", "Jaspritb Bumrah", "KL Rahul", "Rohit Sharma"];

// for (let i = 0; i < myFavCricketers.length; i++){
//     const element = myFavCricketers[i];
//     console.log(element);
// }

// break and continue

// for (let i = 0; i < 10; i++){
//     if(i == 5){
//         console.log(`Your favorite number is detected!`);
//         break;
//     }        
//     console.log(i);
// }

for (let i = 0; i < 10; i++) {
    if (i == 5) 
        continue; // It transfers the contro to the next iteration
    console.log(i);    
}