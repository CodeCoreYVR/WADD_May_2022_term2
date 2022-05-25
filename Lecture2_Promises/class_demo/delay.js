function delay(ms, val){
  console.log('Delay start')
  return new Promise(
    (res, rej) => {
      setTimeout(()=>{
        res(val)
      },ms)
      if(ms === 6000){
        rej(new Error('Failed!!'))
      }
    }
  )
}

// delay(5000 ,'blue').then( val => {
//   console.log(val)
//   return delay(2000, 'red')
// }).then(
//   val => {
//     console.log(val)
//     return delay(4000, 'green')
//   }
// ).then(
//   val => {
//     console.log(val)
//     return delay(3000,'majenta')
//   }
// ).then(
//   val => {
//     console.log(val)
//     return delay(5000,'purple')
//   }
// ).then(val =>{
//   console.log(val)
// }).catch(
//   err => {
//     console.log(`Err: ${err}`)
//   }
// )

module.exports = delay