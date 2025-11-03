
console.log('start');

setTimeout(()=>{
    console.log('inside setTimeout')
},4000)

// let x = new Date();
let y = new Date().getTime();
// console.log(y);

while(new Date().getTime()<y+10000){

}

console.log("end");