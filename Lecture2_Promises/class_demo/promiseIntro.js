const DELAY=5000
const THREE_SECONDS=3000

const pinkyPromise = new Promise(
  (resolve,reject) =>{
    if(DELAY > THREE_SECONDS){
      reject('bad value')
    }
    setTimeout(()=>{
      resolve('Good Value')
    }, DELAY)
  }
)
// pinkyPromise()
// .then(e => console.log(e))
// .catch(e => console.log(e))

