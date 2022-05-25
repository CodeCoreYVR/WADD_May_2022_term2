const readDir = require('./promisifyFs')

async function doSometingAfterReadingFiles(){
  const files = await readDir('./', {encoding: 'utf8'})
  console.log(files)
}

doSometingAfterReadingFiles()