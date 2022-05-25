const fs =  require('fs')

fs.stat('myFile.txt',(err, stat)=>{
  console.log(stat.isFile())
  console.log(stat.isDirectory())
})