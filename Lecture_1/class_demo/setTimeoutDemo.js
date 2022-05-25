// setTimeoutDemo.js
// Use the `setTimeout` function to execute a callback
// after a delay in milliseconds. The arguments
// are in order:
// - A callback function
// - A delay in milliseconds
console.log("Started wait...");

// Because `setTimeout` is asynchronous,
// JavaScript will not pause at the function call
// until the delay is over. It will continue executing
// the lines that follow this functions.
// Once the delay has ellapsed, JavaScript will 
// finally come back and execute the callback. By then,
// the entire script will have finished running. 
setTimeout(() => {
    console.log("Wait 2 seconds");
}, 2000);
// This code does not wait for the `setTimeout` to complete
// its delay 
console.log("Done waiting");

let greeting = "Good Morning!";
console.log("Before setTimeout: ", greeting);

setTimeout(function () {
    greeting = "Yo!";
    // To wait for anything that happens after an asynchronous 
    // function, you must write that code inside the 
    // callback of the asynchronous funciton
    console.log("In the callback: ", greeting);
}, 1000);
console.log("After setTimeout: ", greeting);