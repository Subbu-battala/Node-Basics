// dgram

// its a used for socket communication through UDP (user datagram protocal)
// UDP - ipv4 UDP6 - ipv6

// listner

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')


// node event - method(name,callback listner)

socket.on("message", function (msg, err) {
    if(err) console.log(err)
    console.log('message =', msg.toString())
})

socket.bind(4000)