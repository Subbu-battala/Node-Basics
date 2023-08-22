const http = require('http')
const fs = require('fs')
const port = 4050

const server = http.createServer((req,res) => {
    const fStream = fs.createReadStream('./content/files/subbu.txt', 'utf-8')

    // open => used to open the file, to read content of the file
    fStream.on('open', () => {
        fStream.pipe(res)
    })

    fStream.on("error", (err) => {
        console.log(err)
    })

})

server.listen(port, () => {
    console.log(`server is running @http://localhost:${port}`)
})

