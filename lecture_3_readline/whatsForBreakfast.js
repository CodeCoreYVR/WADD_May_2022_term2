// 1. We need / require 'readline' module from node.
const readline = require('readline')
// 2. create an instance of a Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// process.stdin is an object that represent input from the terminal
// process.stdout is an object that represents output to the terminal

// rl.question:
// A method of an interface instance that prompts the user with text,
// and wiats for input from user. The user can end their input by pressing "enter".
rl.question('What did you have for breakfast ? \n >', 
answer => {
  console.log(`I like ${answer}`)
  rl.close();
})