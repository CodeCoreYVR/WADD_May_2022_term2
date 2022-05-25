const delay = require('./delay')
// Promise.resolve('abc').then( a=>{
//   console.log(a)
// })

// Promise.reject('error').catch( err => {
//   console.log(err)
// })

Promise.all(
  [
    delay(2000,'blue'),
    delay(3000,'red'),
    delay(4000,'purple'),
    delay(5000,'majenta')
  ]
).then( colors =>{ console.log(colors)})