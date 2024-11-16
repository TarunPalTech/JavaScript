// const course = {
//     courseName: "JavaScript",
//     courseFees: 3999,
//     courseInstructor: "Stephen Hawkins"
// }

/* First Method */
// console.log(course.courseName);
// console.log(course.courseFees);
// console.log(course.courseInstructor);

/* Second Method */
// const {courseName, courseFees, courseInstructor} = course;
// console.log(courseName);
// console.log(courseFees);
// console.log(courseInstructor);

// const {courseName,courseInstructor} = course;
// console.log(courseName);
// console.log(courseInstructor);

// courseInstructor is a large string you can convert it into a small string like this:

// const {courseInstructor: instructor} = course;
// console.log(instructor);
// console.log(courseInstructor); => error

// Destructuring of an array

// let myArray = ["Tarun", "Pal", "paltarun832@gmail.com"];
// let [firstName, lastName] = myArray;
// console.log(firstName);
// console.log(lastName);

// let {email} = myArray;
// console.log(email); => undefined

// let [email] = myArray;
// console.log(email); => Tarun(Because it is not a key it works like an index no.)

// So, the method is....
// let [, , email] = myArray;
// console.log(email);  => paltarun832@gmail.com

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, c, ...rest] = arr; // rets will contain rest of the elements.
// console.log(rest); => [ 4, 5, 6, 7, 8, 9 ]

// {
//     "name": "Tarun",
//     "courseName": "JavaScript",
//     "price": "free"
// }

// https://api.github.com/users/hiteshchoudhary

// API's in the format of array
// [
//     {},
//     {},
//     {},
//     {}
// ]

// JSON formatter