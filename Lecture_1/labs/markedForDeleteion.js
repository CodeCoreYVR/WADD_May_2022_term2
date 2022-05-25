const fs = require('fs')

const sourceFile = process.argv[2] || 'sourceFile.txt'
const destinationFile = process.argv[3] || 'destinationFile.txt'

fs.readFile(sourceFile, (err,data)=>{
  const filteredData = data.toString().split('\n').filter( line => 
    line.split(',')[2].trim().toLowerCase() !== 'yes')
    .join('\n')
    fs.writeFile(destinationFile, filteredData, err=>{
      console.log('Marked lines deleted');
      console.log(`New file saved to ${destinationFile}`)
    })
})

