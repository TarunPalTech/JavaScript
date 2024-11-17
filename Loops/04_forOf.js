// for of Loop

// ["", "", ""]

// [{}, {}, {}]

// for (const element of object) {
//     // code here
// }

// const myArr = [1, 2, 3, 4, 5, 6, 7];
// for (let element of myArr){
//     console.log(element);
// }

// const name = "Tarun Pal";
// for (let a of name){
//     if(a == " ")
//         continue;
//     console.log(`Char is ${a}!`);
// }

const map = new Map();  // map() does not allow duplicate values and preserves the order.
map.set('IN', 'India');
map.set('US', 'USA');
map.set('Fr', 'France');
map.set('IN', 'India');

// console.log(map);
// Output:
//  { 'IN' => 'India', 'US' => 'USA', 'Fr' => 'France' }

// for (let key of map){
//     console.log(key);
// }

/* 
[ 'IN', 'India' ]
[ 'US', 'USA' ]
[ 'Fr', 'France' ]
*/

// Method to print key or value separately

// for (let [key, value] of map){
//     console.log(`${key} - ${value}`);
// }

/* 
IN - India
US - USA
Fr - France
*/

// you can not use this method on the objects. You can see the example:

/* const myObj = {
    firstName: "Tarun",
    lastName: "Pal",
    age: 21,
    gender: "Male"
};
for (const [key,value] of myObj) {
    console.log(`${key} :- ${value}`);
} */ 

// TypeError: myObj is not iterable