console.log('start');


window.setTimeout(()=>{
    console.log('mid');
},5000)

// setInterval(()=>{
//     console.log('mid');
// },2000)

// setTimeout(()=>{
//     console.log("Hello")
// },0)

let x = new Date();
// console.log(x);
let y = x.getTime();
// console.log(y);

while(new Date().getTime()<y+10000){

}


console.log('end');