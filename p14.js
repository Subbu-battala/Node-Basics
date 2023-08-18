// dns = domain name system

const dns = require('dns')

dns.lookup("www.youtube.com", function (err,address,family) {
    if(err) console.log(err)
    console.log('addree =', address)
    console.log('family =', family)

    // looup service
    dns.lookupService(address,22,function (err,host,service) {
        if(err) console.log(err)
        console.log('host =', host)
        console.log('service =', service)
    })
})


// www.youtube.com
// addree = 142.250.67.78
// family = 4



// host = maa05s28-in-f14.1e100.net
// service = ssh (secure socket shell)