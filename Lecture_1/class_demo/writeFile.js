const fs = require('fs')

const text = 'This string will be the content of myFile.txt'

fs.writeFile('myFile.txt', text, (err) => {console.log('File Created')} 
)