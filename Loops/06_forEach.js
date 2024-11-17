// forEach() is a higher order function.

// const coding = ["Python", "Java", "JavaScript", "C", "C++"];

// coding.forEach( function (element) {
//     console.log(element);
// })

/* 
Output=>
Python
Java
JavaScript
C
C++
*/

// You can not use named function in forEach().
// Only callBack functions are allowed.


/* Arrow function in forEach(). */
// const coding = ["Python", "Java", "JavaScript", "C", "C++"];

// coding.forEach( (element) => {
//     console.log(element);
// });

/* 
Output=>
Output=>
Python
Java
JavaScript
C
C++    
*/

// const coding = ["Python", "Java", "JavaScript", "C", "C++"];

// forEach() can take a function as an argument.

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);   //forEach requires only reference and there is no need to call it.

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// });

/* 
Python 0 [ 'Python', 'Java', 'JavaScript', 'C', 'C++' ]
Java 1 [ 'Python', 'Java', 'JavaScript', 'C', 'C++' ]
JavaScript 2 [ 'Python', 'Java', 'JavaScript', 'C', 'C++' ]
C 3 [ 'Python', 'Java', 'JavaScript', 'C', 'C++' ]
C++ 4 [ 'Python', 'Java', 'JavaScript', 'C', 'C++' ]
*/

const myCoding = [
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
    {
        languageName: "JavaScript",
        fileName: "js"
    }
];

myCoding.forEach( (item) => {
    console.log(`${item.languageName} - ${item.fileName}`);
})

/* 
Output=>
Python - py
Java - java
JavaScript - js
*/