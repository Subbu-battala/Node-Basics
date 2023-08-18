// cluster module
// Node Js Single threaded - will allow to execute the one app / cmd at a time

// isMaster -> true single thread
// isWorker -> true multi thread -> fork()
// fork() -> method convert single to multi thread

const cluster = require('cluster')

if(cluster.isMaster) {
    console.log(`node is running in single thread`)
} else {
    console.log('no action')
}