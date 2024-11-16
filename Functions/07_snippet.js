// If you want to to see how a code actually executes then you can create a snippet in 
// your browser then you can know how a code is executing in call stack.

// Write these programs in your snippets....

/*
function One(){
    console.log("One");
}
function Two(){
    console.log("Two");
}
function Three(){
    console.log("Three");
}
One();
Two(); 
Three();
*/

function One(){
    console.log("One");
    Two();
}
function Two(){
    console.log("Two");
    Three();
}
function Three(){
    console.log("Three");
}
One();