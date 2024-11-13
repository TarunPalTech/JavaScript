/*  
# Primitive(Call by value)

7 types : String, Boolean, Number, BigInt,
null(data type => object), undefined(data type => undefined), Symbol
*/

/*
const score = 100;
const sourceValue = 100.3

const isLoggedIn = false;
const outsideTemperaature = null;
let userEmail;
*/

/*
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); => false
*/

/*
const bigNumber = 324561234565414689n; => n is used for BigInt.
console.log(bigNumber);
*/

// Reference (Non-Primitive)
/* Array, Objects, Functionsn(Here, you can treat a function like a data type because
you can store it in a variable like below example)*/

/* 
let greet = function printGreetings(){
    return "Welcome to the most beautiful place!";
}
console.log(greet());
console.log(typeof greet); // function or we can say function object
*/

/*
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(typeof arr); // object

let myobj = {
    firstName: "Tarun",
    lastName: "Pal",
    age: 21,
    address: "Meerganj"
}
console.log(myobj);
console.log(typeof myobj);
*/

/********************Stack and Heap in JavaScript ********************/

// Stack (Primitive), Heap (Non-Primitive)
/* 
Stack=> Here, you get copy of the value not an actual value.
Heap=> If you want to change in the value then there will be the change in the actual 
value.
*/
/*
let myEmail = "paltarun832@gmail.com";
let anotherMail = myEmail;
console.log(anotherMail);
console.log(myEmail);
console.log(myEmail === anotherMail); // => myEmail & anotherMail both aren't same
because anotherMail is a copy of myEmail. If you wan to change in another mail then
there is no change in actual value(myEmail), you can see the below example also.
Jab ham heap ke andar koi value rakhte hein to uska copy milta hai aur jab ham stack
mein kuch bhi rakhte hein to uska reference milta hai.
*/

/*
let myEmail = "paltarun832@gmail.com";
let anotherMail = myEmail;
anotherMail = "palt48305@gmail.com"
console.log(myEmail);
console.log(anotherMail);
*/

/*
let myEmail = "paltarun832@gmail.com";
let anotherMail = myEmail;
myMail = "palt48305@gmail.com"
console.log(myEmail);
console.log(anotherMail);
*/

/* 
let myobj = {
    firstName : "Tarun",
    lastname : "Pal",
    age : 21,
    gender : "male"
}

let newObj = myobj;

let x = 5;
let y = x;
console.log(x);
console.log(y);
*/

/* 
=> Data ko memory mein kaise rakha jaye aur use kaise access kiya jaye is basis
pr data type ko do category mein divide kiya gaya hai......
*/