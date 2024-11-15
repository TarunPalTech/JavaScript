/*********************** Date ********************/
/*
JS Date objects represent a sigle moment in time in a 
platform-independent format. date objects encapsulate 
an integral numbe that represents milliseconds since 
the  midnight at the beginning of January 1, 1970, 
UTC (the epoch).
*/

/*
Date has been a long-standing pain point in ECMAScript.
This is a proposal for Temporal(T3C), a global Object that 
acts as top-level namespace (like Math), that brings a 
modern date/time API to the ECMAScript
language. We can use it in future only. 
*/

let myDate = new Date();
// console.log(myDate); => 2024-11-14T11:03:49.941Z

// console.log(myDate.toString()); => Thu Nov 14 2024 11:04:34 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); => Thu Nov 14 2024

// console.log(myDate.toISOString()); => 2024-11-14T11:06:09.365Z

// console.log(myDate.toLocaleString()); => 11/14/2024, 11:07:10 AM

// console.log(myDate.toJSON()); => 2024-11-14T11:07:37.425Z

// let myCreatedDate = new Date(2024, 1 ,23); => Month starts with 0 (Array format)
// console.log(myCreatedDate); => 2024-02-23T00:00:00.000Z
// console.log(myCreatedDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 1 ,23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); =>2/23/2024, 5:03:00 AM
// console.log(myCreatedDate.toTimeString()); => 05:03:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreatedDate.toLocaleTimeString()); => 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleDateString()); => 1/14/2023(Month starts with 01.)

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString()); 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); => 1731647899352(Value in miliseconds.....)

// let myCreatedDate = new Date();
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getDay()); 
// console.log(myCreatedDate.getMonth() + 1);
// console.log(myCreatedDate.getHours());

