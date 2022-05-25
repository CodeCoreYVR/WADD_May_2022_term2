function add( a, b){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      if(isNaN(a) || isNaN(b)){
        rej('All parameters mus t be a number')
      }
      res(a + b)
    })
  })  
}

add('a',6).then((result)=>{
  console.log(result)
}).catch( (err)=>{console.log('Arguments are not number')})

add(5,6).then((result)=>{
  console.log(result)
}).catch( (err)=>{console.log('Arguments are not number')})

function sub(a, b = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a - b);
		});
	});
}

function mult(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a * b);
		});
	});
}

function div(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a / b);
		});
	});
}

function pow(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(Math.pow(a, b));
		});
	});

}