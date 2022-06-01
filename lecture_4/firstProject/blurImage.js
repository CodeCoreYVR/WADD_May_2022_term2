const jimp = require('jimp')
const fileName = process.argv[2]
const blurRadius = parseInt(process.argv[3])

// jimp.read('./test.png',(err, image)=>{
//   if(err){
//     console.error(err)
//   }
//   image.blur(parseInt(blurRadius)).write(`${fileName}.png`)
// })

async function blurTheImage( fileName, radius){
  const image = await jimp.read('./test.png')
  image.blur(radius).write(`${fileName}.png`)
  console.log('Image blured and saved.')
}
blurTheImage(fileName, blurRadius)