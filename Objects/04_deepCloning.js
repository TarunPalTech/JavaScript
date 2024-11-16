// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;

/* 
If you are thinking that data of arr1 will copy into the arr2 then you are wrong because
there only reference copies not values because arr1 is the variable which contains only
address of the existing.
*/

// console.log(arr1);
// console.log(arr2);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
/*  
But there is a fault because if you are going to change something in any array then
js will change in both of the arrays. 
*/
// arr2.push("Tarun");
// console.log(arr1); => [ 1, 2, 3, 4, 5, 'Tarun' ]
// console.log(arr2); => [ 1, 2, 3, 4, 5, 'Tarun' ]


// ******************* Solutions to solve this problem *************

// Method first

// let arr1 = [];
// let arr2 = [1, 2, 3, 4, 5];
// arr1 = arr1.concat(arr2);
// arr1.push("Tarun");
// console.log(arr1); => [ 1, 2, 3, 4, 5, 'Tarun' ]
// console.log(arr2); => [ 1, 2, 3, 4, 5 ]


/* 
=> There is a problem, js will treat the whole object like an element, But if you are going to make changes in an internal array then there is a problem, you can see in the following example. 
*/
// let arr1 = [];
// let arr2 = [1, 2, 3, 4, 5, user = {firstName: "Tarun", lastName: "Pal"}];

// arr1 = arr1.concat(arr2);
// console.log(arr1); => [ 1, 2, 3, 4, 5, { firstName: 'Tarun', lastName: 'Pal' } ]
// console.log(arr2); => [ 1, 2, 3, 4, 5, { firstName: 'Tarun', lastName: 'Pal' } ]

// arr1[5].firstName = "Ravi";
// console.log(arr1); => [ 1, 2, 3, 4, 5, { firstName: 'Ravi', lastName: 'Pal' } ]
// console.log(arr2);=> [ 1, 2, 3, 4, 5, { firstName: 'Ravi', lastName: 'Pal' } ]

/* 
That is the problem, changes will be done in bothe of arrays because we wan to change in the object and objects have references.
*/

// Solution is spread(...(array or object name)) operator.

// let arr1 = [1, 2, 3, 4, 5];
// let copyOfArr1 = [...arr1];
// arr1[2] = "Tarun";
// console.log(arr1); => [ 1, 2, 'Tarun', 4, 5 ]
// console.log(copyOfArr1); => [ 1, 2, 3, 4, 5 ]


// let arr1 = [];
// let arr2 = [1, 2, 3, 4, 5, user = {firstName: "Tarun", lastName: "Pal"}];
// arr1 = arr1.concat(arr2);
// arr1[5].firstName = "Ravi";
// arr1[5].lastName = "Gangwar";
// console.log(arr1); => [ 1, 2, 3, 4, 5, { firstName: 'Ravi', lastName: 'Gangwar' } ]
// console.log(arr2); => [ 1, 2, 3, 4, 5, { firstName: 'Ravi', lastName: 'Gangwar' } ]


// Soltution.......
// => Deep Cloning

/* 
If you are using object then it is not able to copy objects that exists inside it because
these objects also have some reference then if you are going to change the value of it
then it will also change into its copy.
*/

// function greet(){
//     console.log("Hello, JS warriors!");
// }
// let myArr = [1,2,3,[4,5],greet];  // // function is also a data type.
// let myArrCopy = [...myArr];
// console.log(myArr);
// console.log(myArrCopy);

/* 
If you are going to assign an object or array then in this situation only address of 
this array or object will copy into the variable but this type of copies are shallow
copies not deep. So the solution is spread operator but spread operator also has some 
limitations like it is not able to make deep copy of objects when it comes into an 
object or array because they also have some reference if you are going to change them
then the value will change in your copy also.
*/

/* So, we have a solution of this problem. The solution is Lodash library. If you want
to learn it then visit 05_lodash.js 
*/

// let arr1 = [1,2,3,4,[5,6]];
// let arr2 = [...arr1];
// arr1[4] = "Tarun";
// console.log(arr1); => [ 1, 2, 3, 4, 'Tarun' ]
// console.log(arr2); => [ 1, 2, 3, 4, [ 5, 6 ] ]
