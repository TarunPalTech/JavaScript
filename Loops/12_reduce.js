// const myNums = [1,2,3,4,5];
// const initialValue = 0;

// const myTotal = myNums.reduce(function (accumulator, currentValue){
//     console.log(`Accumulator - ${accumulator}`);
//     return accumulator + currentValue;
// }, initialValue)
// console.log(myTotal);

/* 
Accumulator - 0
Accumulator - 1
Accumulator - 3
Accumulator - 6
Accumulator - 10
15
*/

// const myNums = [1,2,3,4,5];
// const myTotal = myNums.reduce((acc, crr)=> {
//     return acc + crr;
// }, 0);
// console.log(myTotal); => 15


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 3000
    },
    {
        itemName: "Python",
        price: 2500
    },
    {
        itemName: "Java",
        price: 3600
    },
    {
        itemName: "Kotlin",
        price: 10000
    },
    {
        itemName: "Data Science",
        price: 12500
    }
];

// Shopping Cart is a real life usecase of reduce functionality......

const totalAmount = shoppingCart.reduce((acc,crr)=>acc+crr.price,0)
// console.log(`Your bill is ${totalAmount} Rs.`);  => Your bill is 31600 Rs.
