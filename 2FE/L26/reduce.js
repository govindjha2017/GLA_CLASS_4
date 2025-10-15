
let arr = [24,45,61,37,46];

let x =  arr.reduce((acc,item,ind,arr)=>{
    //    console.log("hello")
    // console.log(item,ind ,arr)
    // console.log(acc);
    return ind*item
})

console.log(x);