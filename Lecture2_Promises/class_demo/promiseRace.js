const delay = require('./delay')
Promise.race(
  [
    delay(2000,'blue'),
    delay(1000,'red'),
    delay(5000,'purple')
  ]
).then( colors =>{ console.log(colors)})