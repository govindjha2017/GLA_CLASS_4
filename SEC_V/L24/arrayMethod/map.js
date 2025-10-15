let arr = [23,46,18,37,66,13];

let mapArr = arr.map((item,ind,arr)=>{
    //  console.log(item , ind , arr);
    // return ind*5

    return item-5;

})

console.log(mapArr)