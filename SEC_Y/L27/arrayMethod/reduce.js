
let arr = [23,45,66,28,75];


let x = arr.reduce((acc,item,ind,arr)=>{

    // console.log("hello")
    // console.log(item,ind,arr);
    // console.log(acc);

    // return "hello"
    return ind*5;
})

console.log(x);