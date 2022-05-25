const delay = require('./delay')
Promise.resolve('abc')
.then(a=>{
  console.log(a)
})
Promise.reject("error")
  .catch(err => {
    console.log(err); // "error"
  })

  // Promise.race([
  //   delay(2000, 'blue'),
  //   delay(1000, 'red'),
  //   delay(5000, 'green')
  // ]).then(color => { // after about 1000ms (because of delay) it will execute this callback. Note: the other promises will still finish executing. (So it's very important they do not have side effects in this case)
  //   console.log(color); // 'red'
  // })

  Promise.all([
    delay(2000, 'blue'),
    delay(1000, 'red'),
    delay(5000, 'green')
  ]).then(colors => { // after about 5000ms (because of delay) it will execute the callback.
    console.log(colors); // ['blue', 'red', 'green']
  })