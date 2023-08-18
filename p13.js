// dgram

// sender

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

let msg = Buffer.from(`welcome to node js dgram example`);

socket.send(msg,4000,"localhost")

console.log(`data successfully sent through the socket, receive data @ port 4000`)