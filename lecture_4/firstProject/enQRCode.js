// const readline = require('readline')
// const fs = require('fs')

// When requiring a package, use the name of the package
// as listed in the dependencies section in package.json file
const QRCode = require('qrcode')
// console.log(process.argv)
const fileName = process.argv[2]
const strFromUser = process.argv[3]

QRCode.toFile(`${fileName}.png`, strFromUser, error => {
  console.log(`QRCode save to "${fileName}"`);
}) 