let name = "Tarun";
let repoCount = 100;
// console.log("My name is " + name + " and my repo count is " + repoCount); => Old method

// console.log(`My name is ${name} and my repo count is ${repoCount}`);  

/* 
=>It is called string Interpolaion or we can sap template literals.
=> Place Holder : ${}
 */

/* 
const myName = "Tarun Pal";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
console.log(myName[6]);
console.log(myName[7]);
console.log(myName[8]);

=> String is an object rather than an array.
*/

// let myName = new String("Tarun Pal");
// console.log(typeof myName);  => object - It is a constructor.

// console.log(myName.__proto__);  => {} Method to access its prototype.

/*
Here, we get an empty object but it is not empty in real there are some methods to
display it but one of them is very popular if you want to try it then perform it
on your browser's console.
*/

// let str1 = "Tarun";
// let str2 = str1;
// str1 = "Pal";
// // console.log(str1); => Pal
// // console.log(str2); => Tarun

// let str1 = new String("Tarun");
// let str2 = str1;
// console.log(str1); => [String: 'Tarun']
// console.log(str2);  => [String: 'Tarun']
// console.log(typeof str1); => object
// console.log(typeof str2); => object

// let str1 = new String("Tarun");
// let str2 = "Pal"; => string
// console.table([str1, str2]);
// console.log(typeof str1); => string
// console.log(typeof str2); => object


// let myName = "TarunPal";
// console.log(myName.length); => 8
// console.log(myName.toUpperCase()); => TARUNPAL
// console.log(myName.toLocaleUpperCase()); => TARUNPAL
// console.log(myName); => TarunPal(Value will not be change.)
// console.log(myName.charAt(3)); => u
// console.log(myName.indexOf('n')); => 4

// const newString = myName.substring(0,4); => (include,exclude)
// console.log(newString); => Taru

// const anotherString = myName.slice(-5,7);
// console.log(anotherString); => unPa
// Here, we can pass negative values.

// let myName = "          Tarun         ";
// console.log(myName.trim());  => Tarun
// console.log(myName.trimStart()); => Tarun
// console.log(myName.trimEnd()); =>         Tarun

// let newString = "paltarun832@gmaildotcom";
// console.log(newString.replace('dot','.'));  => paltarun832@gmail.com
// console.log(newString.includes('a')); => true
// console.log(newString.replaceAll('arun832','48305'));

/* Important Concept */

// let str1 = "Tarun";
// let str2 = str1;

// console.log(str1);
// console.log(str2);
// console.log(str1 == str2); => true

// str1 = "Pal";
// console.log(str1); => Pal
// console.log(str2); => Tarun
// console.log(str1 == str2); => false

// let str1 = new String("Tarun");
// let str2 = str1;

// console.log(str1);  => [String: 'Tarun']
// console.log(str2); => [String: 'Tarun']

// console.log(str1 == str2); => true

// Confusing
let str1 = new String("Tarun");
let str2 = str1;
// str2[0] = 'V';
// console.log(str1); => [String: 'Tarun']
// console.log(str2); => [String: 'Tarun']
// console.log(str1[0]); => T


// But in the case of array, it will change.
// let arr1 = [1,2,3,4,5];
// arr1[0] = 7;
// console.log(arr1); => [ 7, 2, 3, 4, 5 ]

