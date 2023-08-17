// require(path) => to import modules

const {user1, user2, user3} = require('./data/names')
const print = require('./data/method')

console.log('user1 =', user1)
console.log('user2 =', user2)
console.log('user3 =', user3)

print(user1)
print(user2)
print(user3)