// OS module

const os = require('os')

const user = os.userInfo()
console.log('user info =', user)

// up time
console.log(`up time =`, os.uptime())

const currOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freMemory: os.freemem(),
    arch: os.arch(),
    cup: os.cpus(),
    avgLoad: os.loadavg()
}

console.log('current os =', currOs)