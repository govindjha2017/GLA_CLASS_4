// array method :- map , filter , reduce


var arr = [34,65,13,78,43];

// let cb = (item,ind,arr)=>{
//     console.log(item)
//     console.log(ind);
//     console.log(arr)
// }

// arr.map(cb)

let mapArr = arr.map((item,ind)=>{
    // return ind*10
    // return 'abc'
    return item-10;
})

console.log(mapArr)