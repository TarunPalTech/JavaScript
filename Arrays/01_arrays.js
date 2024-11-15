/* Arrays */

// let arr1 = ["Virat kohli", "Rishabh Pant", "Rohit Sharma", "Surya Kumar Yadav"]
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// arr1.push("Sachin Tendulkar"); => Adds it as a last element.
// console.log(arr1);  

// arr1.pop() => Removes element fron last.
// console.log(arr1);

// arr1.unshift("Harbhajan Singh"); => Adds it into starting
// console.log(arr1);

// arr1.shift(); => Removes an element from start
// console.log(arr1);

/* 
Prefer not to use shift and unshift because there is need of some shifting so here time complexity is high. When array is to large then it is a problematic situation.
*/
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = '*';

// let newArr = arr1.join(arr2); //=> it returns a string and the result will be like this -----> 1*2*3*4*5
// console.log(newArr);

// let arrToString = arr1.join();
// console.log(arrToString); => Adds all the elements of an array into a string separated by comma.
// console.log(typeof arrToString); => string


/* slice vs splice */

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr1.slice(0,3); => slice(includes, excludes)
// console.log(arr1); => No change in the existing array.
// console.log(newArr); => It returns a new array.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr1.splice(0,3);
// console.log(newArr); => It return a new array.
// console.log(arr1); => [ 4, 5, 6, 7, 8, 9 ]--->It changes to the original array.

