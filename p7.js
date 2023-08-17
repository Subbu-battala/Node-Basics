// assert module
// handle run time exception (run time error )

const assert = require('assert')

// assert(10 > 15)

const x = [
    {
        name: "jhon"
    }
]

const y = {
    name: "jhon"
}

const z = [
    {
        name: "jhon"
    }
]


// values must be strictly deep equal, (structure, datatype, property, values)
//assert.deepStrictEqual(x,y)
//assert.deepStrictEqual(x,z)

//assert.notDeepStrictEqual(x,z)

 assert.notDeepStrictEqual(x,y)