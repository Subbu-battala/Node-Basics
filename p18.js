const path = require('path')
console.log('path sep =', path.sep) /* index pathj */

// join path =

const filepath = path.join(`content`, 'sub', 'test.text')
console.log('filepath =', filepath)


// base (file) path
const base = path.basename(filepath)
console.log('base name =', base)

// absolute path
const absolute = path.resolve(__dirname, 'content', 'images', '1.jpj')
console.log('absolute path =', absolute)