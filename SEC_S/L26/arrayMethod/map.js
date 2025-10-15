
let arr = [23,46,75,12,39,65];

let mapArr = arr.map((item,ind,arr)=>{
    // console.log("hello")
    // console.log(item,  ind , arr)
    // return ind*5
    return item-5
});

console.log(mapArr)