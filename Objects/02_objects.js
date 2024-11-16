// Singleton Objects or Using Constructor

// const tinderUser1 = {};
// console.log(tinderUser1); //=> {}

// const tinderUser2 = {};
// console.log(tinderUser2); //=> {}
// console.log(tinderUser1 == tinderUser2); //=> false
// tinderUser1 or tinderUser2 both are empty objects.

// let facebookUser = {
//     email: "javascript@gmail.com",
//     fullName: {
//         firstName: "Tarun",
//         lastName: "Pal",
//         age: 21
//     },
//     gender: "male"
// }
// console.log(facebookUser.fullName?.firstName);
// console.log(facebookUser.fullName?.lastName);
// ? is used to get rid of from unwanted error means if particular data doesn't exist.

/* 
? used to handle the condition that last name doesn't exist when 
we are fetching value through API then it provides protection.
*/

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const newObj = {obj1, obj2, obj3};
// console.log(newObj);
/* 
Output will be like this:
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}

=> But we want to include all the elements in a sigle obj without any nesting object
  like this => {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"} then use Object.assign() 
  method.
*/

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(newObj); => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/* 
This method takes multiple values but the first value is the target value but 
the second value is source value. This means the second value will be add in 
the first value. Source values can be mutiple. It returns an object.
*/

/* 
Empty object is used as a target object. If you are not using an empty object then 
your obj1 will be treat like target value. Use of an empty object is a good practice
because it sures that your result must be an object.
*/

/* 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// But the other method(rest operator/spread operator) to combine these objects in a single object is:
const newObj = {...obj1, ...obj2, ...obj3};
console.log(newObj);
 */

/* 
If you are fetching the data from backend then it will come into the form of array
and sometimes it will contain  collection of arrays in this situation you can easily
fetch the data like this:
*/ 


// const users = [
//     tinderUser = {
//         firstName: "Tarun",
//         lastName: "Pal",
//         age: 21,
//         gender: "male"
//     },
//     facebookUser = {
//         firstName: "Ravi",
//         lastName: "Gangwar",
//         age: 21,
//         gender: "male"
//     }
// ]

// console.log(users[0].firstName);
// console.log(users[1].firstName);

const tinderUser = {
    firstName: "Tarun",
    lastName: "Pal",
    age: 21,
    gender: "Male"
};
// console.log(Object.entries(tinderUser)); // It returns arrays of array.
/* 
[
  [ 'firstName', 'Tarun' ],
  [ 'lastName', 'Pal' ],
  [ 'age', 21 ],
  [ 'gender', 'Male' ]
]
*/

// console.log(tinderUser.hasOwnProperty('lastName')); => true
// // If property exists then true otherwise false.