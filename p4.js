const {sum, mul} = require('./data/calc')
const {p,q,r} = require('./data/numbers')

console.log('sum', sum(p,q))
console.log('sum', sum(p,r))
console.log('sum', sum(q,r))

mul(p,q)
mul(p,r)
mul(q,r)