const fs = require('fs')

const stream = fs.createReadStream('./content/files/subbu.txt')

// data => handles the response from the file
stream.on("data", (result) => {
    console.log('result =', result) //buffer
    console.log(result.toString()) // string
})

// error => handles the run time errors (exceptions)
stream.on('error', (err) => {
    console.log(err)
})