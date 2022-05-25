const fs = require('fs')

function writeFile(fileName, content){
  return new Promise(
    (res,rej)=>{
      fs.writeFile(fileName,content, err =>{
        if (err) {
          rej(err)
        }
        res('New file written')
      })
    }
  )
}

writeFile('file.txt', 'This is a content of file')
.then( msg =>{console.log(msg)})
.catch( err=>{console.err(err)})