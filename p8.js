// Buffer module

// memory allocation

const buf = Buffer.alloc(5);
console.log('safe memory =', buf)

const buf1 = Buffer.allocUnsafe(5);
console.log('unsafe memory =', buf1) // can allow garbage values

// from() -> ASCII values
const buf2 = Buffer.from("Javascript") // to change an ascii value 
console.log('ascii =', buf2);
console.log('ascii to string =', buf2.toString());