
console.log("namste");

// var let const
console.log(x)
var x=45;
console.log(x);

var x;
x=11;
console.log(x)

let y = 12;
console.log(y)

// let y  can't do this
y = "value changed";
console.log(y)

const z = 33;
console.log(z)

// const z can't do this

// z= "const value changed";  can't do this

console.log(z);

// var is functional scope
// let and const are block scope

{
    var a=10;
    let b = 20;
    const c= 30;
    console.log(a,b,c);

}

console.log(a);
console.log(c);