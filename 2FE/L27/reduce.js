let arr = [23,45,66,72,16];

let x = arr.reduce((acc,item,ind,arr)=>{
    // console.log("hello");
    // console.log(acc);
    return ind*10;
},5)

console.log(x);