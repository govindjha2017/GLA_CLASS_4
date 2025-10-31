let arr = [23,45,66,84,24];


let reduceVal = arr.reduce((acc,item,ind,arr)=>{
    // console.log("hello")

    // console.log(item,ind,arr)

    // console.log(acc);
    return ind*5;
},0)

console.log(reduceVal);