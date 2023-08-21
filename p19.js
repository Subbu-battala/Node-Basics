// fs => file system

const fs = require('fs')

console.log('file operations started')

// synchronous => direct or without callback function
// Asynchronous => indirect or with callback function
const first = fs.readFileSync('./content/files/p1.txt')
const sec = fs.readFileSync('./content/files/p2.txt')

fs.writeFileSync('./content/files/res-1.txt', `output of both the files : /n ${first} /n /n ${sec}`)

console.log('file write completed')