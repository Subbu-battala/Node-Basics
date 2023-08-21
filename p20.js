const fs = require('fs')

// async method
console.log('started')

// async read f1
fs.readFile('./content/files/p1.txt', 'utf-8', (err,res1) => {
    if(err) console.log(err)

    const first = res1

    // async read f2
    fs.readFile('./content/files/p2.txt', 'utf-8', (err,res2) => {
        if(err) console.log(err)

        const sec = res2;

        // write file
        fs.writeFile('./content/files/res-async.txt', `Here is your async result: /n ${first} /n/n ${sec}`, (err,res) => {
            if(err) console.log(err)
            console.log('write operation completed')
        })

    })
})