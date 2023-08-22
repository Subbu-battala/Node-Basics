// events emitters
// node event =>
const EventEmitter = require('events')

const x = new EventEmitter()

// inst.on(title,handler) => to define the node events
// inst.emit(title) => trigger the event

x.on('display',(name,email) => {
    console.log(`name = ${name}, and email = ${email}`)
})

x.on("print", function() {
    console.log('welcome to node js')
})

x.emit('display', "Subbu","subbubattala01@gmail.com")
x.emit('print')

