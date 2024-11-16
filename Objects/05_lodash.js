const _ = require('lodash');
let person1 = {
    fullName: {
        firstName: "Tarun",
        lastName: "Pal"
    },
    age: 21,
    gender: "male"
};

// If you want to use it then include this file => <script src="lodash.js"></script>
// If you want to use it through npm commands then => 
// 1. npm i -g npm
// 2. npm i --save lodash
// or you can use npm install lodash
let person2 = {};
_.merge(person2,person1);
person2.fullName.firstName = "Ravi";
person2.fullName,firstName = "Gangwar"; // Deep Clone
console.log(person1);
console.log(person2);

/* 
{
  fullName: { firstName: 'Tarun', lastName: 'Pal' },
  age: 21,
  gender: 'male'
}
{
  fullName: { firstName: 'Ravi', lastName: 'Pal' },
  age: 21,
  gender: 'male'
}
*/

// Uses of lodash =>
/* 
1. Chunk: Splits an array into chunks of a specified size.
const chunkedArray = _.chunk(array, 2);

2. Debounce: Creates a debounced function that delays invoking 
the provided function until after a specified wait time.
const debouncedLog = _.debounce(log, 1000);

3. Merge: Deeply merges two objects.
const mergedObject = _.merge(object1, object2);
*/