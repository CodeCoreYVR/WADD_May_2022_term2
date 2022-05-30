const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 // Until here this is standard
rl.setPrompt('> ') // Set a prompt 

rl.on('line', (answer)=>{ // wait for 'line' event to trigger
  if (answer === 'chrome'){ // performing simple comparison
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