const fs = require('fs')

function readDir(path, options){
  return new Promise(
    (res, rej) =>{
      fs.readdir(path, options, (err,files)=>{
        if(err){
          rej(err)
        }else{
          res(files)
        }
      })
    }
  )
}

// readDir('./', {encoding: 'utf8'})
//   .then(
//     files =>{
//       console.log(files)
//     }
//   ).catch(
//     err => {
//       console.log(err)
//     }
//   )

module.exports = readDir;