const fs = require('fs')

const fileName = process.argv[2]

fs.readFile(`./${fileName}`, (err, data)=>{
  const fileContent = data.toString()
  const lineArray = fileContent.split('\n')
  lineArray.forEach((line, index)=>{
    console.log(`${index + 1} | ${line}`)
  })
})