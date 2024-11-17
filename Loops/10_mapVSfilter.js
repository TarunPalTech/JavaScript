/* 
Here, you can see the differences between map and filter..........
map returns all the values or we can say it returns array of values if the value isn't
available then it return undefined...
filter returns values if the particular is true or we can say it returns array with 
particular values.....
*/

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = myNumber.map((num)=>num>5)
// console.log(newNumber);

/* 
Output=>
[
  false, false, false,
  false, false, true,
  true,  true,  true,
  true
]
*/

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = myNumber.filter((num)=>num>5);
// console.log(newNumber);  => [ 6, 7, 8, 9, 10 ]

// const newNumber = myNumber.map((num)=>{
//     if(num>5){
//         return num;
//     }
// })
// console.log(newNumber);
/* 
[
  undefined, undefined,
  undefined, undefined,
  undefined, 6,
  7,         8,
  9,         10
]
*/

// If you want to save yourself with the problem of undefined then use filter.....

// Write a program to calculate square of all the elements from the given array.....

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareArr = myNumber.map((num)=>num*num);
console.log(squareArr);

/* 
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
*/