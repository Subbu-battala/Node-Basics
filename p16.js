// http module

const http = require('http')
let port = 5000 // 4 digits

// application/json => json type of response
// application/plain => downloadable text file
// text/plain => text type of response
// text/html => html type of response

const server = http.createServer(function(req,res) {
    res.writeHead(200, {"content-Type" : "text/html"})
    res.end(`<div>
                <h1>Welocome to Node.js</h1>
                <p>lorem ipsum dolor, sir amet consector elit lorem ipsum dolor, sir amet consector elit lorem ipsum dolor, sir amet consector elit lorem ipsum dolor, sir amet consector elit lorem ipsum dolor, sir amet consector elit lorem ipsum dolor, sir amet consector elit</p>
            </div>`)
});

server.listen(port, () => {
    console.log(`server is running @http://localhost:${port}`)
});

