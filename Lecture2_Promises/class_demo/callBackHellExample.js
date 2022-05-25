const fs = require('fs')
const path = process.argv[2]

let source = path
fs.readdir(source, (err, files)=>{ // read a source directory
  if(err){
    console.log(`Error Finding files: ${err}`)
  }else{
    fs.mkdir(`${path}/copies/`, {recursive: true}, (err) =>{ // make directory to hold copies
      if(err){
        console.log(`Error making copy directory: ${err}`)
      }
      files.forEach((filename, index) => {
        fs.readFile(`${path}/${filename}`,{encoding: 'utf8'}, (err,data)=>{
          if(err){
            console.log(`Error reading files: ${err}`)
          }
          fs.writeFile(`${path}/${filename}_copy`, data, {recursive: true}, (err,data)=>{
            if(err){
              console.log(`Error writing files: ${err}`)
            }else{
              console.log('Successfully written files')
            }
          })
        })
      });
    })
  }

})
