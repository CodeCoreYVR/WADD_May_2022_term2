const fs = require('fs')
// 1. We need / require 'readline' module from node.
const readline = require('readline')
// 2. create an instance of a Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const word = 'node'

const wordArray = word.split('')

const hiddenWord = replaceLettersWithDashes(word)

let hiddenWordArray = hiddenWord.split('')

rl.setPrompt('> ') // Set a prompt 

rl.on('line', (answer)=>{ // wait for 'line' event to trigger
  if (wordArray.indexOf(wordArray) !== -1 ){ // performing simple comparison
    console.log('Character present in word')
    rl.close() // closing an input stream
  } else {
    console.log(" Nope, Try again.") // writing a message on screen
    rl.prompt() // prompting again for new answer, to a user, on terminal.
  }
})

rl.on('close', ()=>{ // When close event is fired execute a call back
  console.log("That's a right answer") 
})

console.log('What is the name of Google Browser? \n')
rl.prompt()// prompt to user for an answer



function replaceLettersWithDashes(str) {
  return str.replace(/[a-z]/gi , '-');
}