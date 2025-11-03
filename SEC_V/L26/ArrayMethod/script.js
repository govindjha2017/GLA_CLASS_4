let arr = [23,45,67,46,34];

let reduceVal = arr.reduce((acc,item,ind,arr)=>{
    // console.log("hello")
    // console.log(item , ind ,arr);

    // console.log(acc);
    // return "hello"

    return ind*5
})

console.log(reduceVal);