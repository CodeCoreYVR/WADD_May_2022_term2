const fs = require('fs')
// 1. We need / require 'readline' module from node.
const readline = require('readline')
// 2. create an instance of a Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('How wide is the rectangle? \n >', 
width => {
  console.log(`width: ${width}`)
  rl.question('How high is the rectangle? \n > ',(height)=>{
    console.log(`Height:${height}`)
    rl.question('What is the output filename? \n>', (fileName)=>{
      console.log(`FileName: ${fileName}`)
      createFileWithStars(width, height, fileName)
      rl.close()
    })
  })
})


function createFileWithStars(width,height, fileName){
  let output = ''
  for (let i= 0; i < height; i++){
    for (let j = 0; j < width; j++){
      output += '* '
    }
    output += '\n'
  }

  
  fs.writeFile(`${fileName}.txt`, output , err =>{
    if(err){
      console.error(err)
      return
    }
    console.log(`Wrote ${fileName} to disk`)
  })
}