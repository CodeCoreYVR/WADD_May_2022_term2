function throwDie(number){
  return new Promise(
    (resolve, reject)=>{
      const delay = [3,4,5][Math.floor(Math.random()*3)]*1000
      const randomNumber = Math.ceil(Math.random()* number)
      setTimeout(()=>{
        resolve(randomNumber)
      },delay)
    }
  )
}

throwDie(10).then( e => console.log(e))
throwDie(7).then( e => console.log(e))
throwDie(5).then( e => console.log(e))
throwDie(10).then( e => console.log(e))
throwDie(3).then( e => console.log(e))
throwDie(2).then( e => console.log(e))
throwDie(10).then( e => console.log(e))
