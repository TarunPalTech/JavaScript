// let a = 10; Local or Global
// const b = 20; Local or Global
// var c = 30; Always Global(It's a problem!)

// if(true){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a); => you can not access local variables outside the scope.
// console.log(b); => you can not access local variables outside the scope.
// console.log(c); => Always Global


// Problematic situation with var

var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(c); => 30

/* 
=> This is the problem with var. If the data comes froom another file
then another programmer can use the same name for some task. 
*/

// New Concept

// let a = 1000;
// if(true){
//     console.log("Inner a:",a); => 1000
// }
// console.log("Outer a:",a); => 1000

// let a = 300;
// if(true){
//     let a = 10;
//     console.log("Inner a:",a); => 10
// }
// console.log("Outer a:",a); => 300


