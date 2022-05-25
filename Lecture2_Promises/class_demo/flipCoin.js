function throwCoin(number){
  // function throwDie(number){
  return new Promise((resolve, reject)=>{
    const face =[1,0][Math.floor(Math.random()*2)]
    // const randomNumber =Math.ceil(Math.random()*number)
    const randomTime = [1,2,3,4][Math.floor(Math.random()*4)]*1000
    if(randomTime > 3000){
      setTimeout(()=>{
        reject(new Error('Coin was thrown too high!!'))
      }, randomTime)
    } else {
      setTimeout(()=>{
        if(face !== 1) {
          resolve('Tails')
        }else {
          resolve(' Heads')
        }
      },randomTime)
    }
  })
}
throwCoin()
.then( resolvedValue => { console.log(resolvedValue)} )
.catch( rejectedValue =>{console.log(rejectedValue)})