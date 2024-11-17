const coding = ["JavaScript","Python","C","C++","Java","Kotlin"];

// const values = coding.forEach((element)=>{
//     console.log(element);
// })
// console.log(values); undefined
// Here, you can see callBack function forEach() returns nothing..........

// What will happen if we write return statement........
// const values = coding.forEach((element)=>{
//     return element;
// });
// console.log(values); undefined
//Undefined because forEach return nothing.......

/*  
It means forEach method return nothing if you want to return something then there is need to use filter or map methods. 
They are also callBack functions. 
*/

// const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num)=> num>4);
// console.log(newNums);  => [ 5, 6, 7, 8, 9 ]

// If you are not going to write it like above statement then........

// const newNums = myNums.filter((num)=>{
//     num>4;
// })
// console.log(newNums); => []


// In this situation, must use return keyword because you are using explicit return....

/* const newNums = myNums.filter((num) => {
    return num > 4;
});
console.log(newNums); // [ 5, 6, 7, 8, 9 ] */

// If you want to perform the same task without using filter then......

let myNums = [1,2,3,4,5,6,7,8,9];
const newNums = [];
myNums.forEach((item)=>{
    if(item>4)
        newNums.push(item);
})
// console.log(newNums); => [ 5, 6, 7, 8, 9 ]
