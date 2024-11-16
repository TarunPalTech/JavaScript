// IIFE => Immediately Invoked Function Expressions

/* 
Why do we need IIFE?
=> We need IIFE so that we can execute some code immediately like if we are using 
database connectivity then we want to load it immediately or if we are using a function 
that is nested then it can access to the global scope that can be the cause to pollute
your code in case you can use IIFE. In simple terms if you want to save yourself from
the pollution of global scope then you should use IIFE.
*/

// Method to write IIFE function

(function dbInfo(){
    console.log(`DB Connected!`);
})();

/*  
If you are using two or more than two IIFE then must use ; otherwise it can be 
cause of  because IIFE function has been invoked but it doesn't know when it should
be stop. 
*/

((name) => {
    console.log(`DB Connected Two! ${name}`);
})("Tarun Pal");