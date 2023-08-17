const x = 123;
let y = 42


let res = x * y

console.log('product =', res)

if(x > y ) {
    console.log('x is greater than y')
} else {
    console.log('y is greater than x')
}


// lopping statements

for(let i=0; i<=10; i++) {
    console.log(`${x} * ${i} = ${x * i} `);
}

// while loop
 let i =1;

 while(i <= 10) {
    console.log(`${y} * ${i} = ${y * i}`);
    i++;
 }

 // array
 let colors = ["red", "green", "blue", "white", "orange" ]

 // Object

 let user = {
    name: "subbu",
    email: "subbubattala01@gmail.com",
    phone: "6309309253",
    age: 22
 }


 // object array
 let course = [
    {
        id: 1,
        title: "HTML",
        duration: 1
    },
    {
        id: 2,
        title: "CSS",
        duration:1
    },
    {
        id:3,
        title: "Javascript",
        duration: 1.5
    }
 ]