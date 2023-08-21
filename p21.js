const http = require('http')
const port = 5100

const server = http.createServer(function (req,res) {
    // req.url => to read path from the browser

    switch(req.url) {
        case "/":
            res.end(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/">about</a>
                            <a href="/">contact</a>
                            <a href="/">login</a>
                        </nav>
                            <h1> Home page </h1>
                    </div>`)
            break;
        case "/about":
            res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">contact</a>
                <a href="/">login</a>
            </nav>
                <h1> about page </h1>
        </div>`)
            break;
        case "/contact":
            res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">contact</a>
                <a href="/">login</a>
            </nav>
                <h1> contact page </h1>
        </div>`)
            break;
       default:
            res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">contact</a>
                <a href="/">login</a>
            </nav>
                <h1> page not found  </h1>
        </div>`)
            break;
    }
})

server.listen(port, function() {
    console.log(`server statrted in @localhost:${port}`)
})