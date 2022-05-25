const add = require('./add')
const primes = require('./prime')

console.log(primes.reduce(add, 0))