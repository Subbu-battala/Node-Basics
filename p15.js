const dns = require('dns')

dns.resolve4("www.instagram.com", (err,data) => {
    if(err) console.log(err)
    data.forEach(item => {
        dns.reverse(item, (err,host) => {
            if(err) console.log(err)
            console.log(`reverse dns = ${item}, : ${JSON.stringify(host)}`)
        })
    })
})

dns.resolve6("www.instagram.com", (err,data) => {
    if(err) console.log(err)
    data.forEach(item => {
        dns.reverse(item, (err,host) => {
            if(err) console.log(err)
            console.log(`reverse dns = ${item}, : ${JSON.stringify(host)}`)
        })
    })
})



// reverse dns = 157.240.23.174, : ["instagram-p42-shv-01-maa2.fbcdn.net"]
// reverse dns = 2a03:2880:f237:e5:face:b00c:0:4420, : ["instagram-p426-shv-01-maa2.fbcdn.net"]