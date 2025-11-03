
var arr = [23,45,66,72];

let mapArr = arr.map((item,ind,arr)=>{
    // console.log("hello");
    // console.log(item,ind,arr)

    // return "hello"

    // return ind*5;

    return item-5;
})

console.log(mapArr)