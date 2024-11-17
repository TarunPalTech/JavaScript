// const myObj = {
//     firstName: "Tarun",
//     lastName: "Pal",
//     age: 21,
//     gender: "male"
// };
// for (const key in myObj){
//     console.log(`${key} - ${myObj[key]}`);
// }

/* 
Output+>
firstName - Tarun
lastName - Pal
age - 21
gender - male
*/

// const programming = ["Python", "JavaScript", "C", "C++", "Swift", "Kotlin"];
// for (let key in programming){
//     console.log(`${programming[key]}`);
// }

/* 
Python
JavaScript
C
C++
Swift
Kotlin
*/

// for in loop do not work on the map

const map = new Map();
map.set('py','Python');
map.set('js',"JavaScript");
map.set('java',"Java");
map.set('cpp','C++');

for (let key in map){
    console.log(`${key}`);
}

// forIn loop can not iterate it.