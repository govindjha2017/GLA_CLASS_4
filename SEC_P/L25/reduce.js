let arr = [23,45,56,14];


// let x = arr.reduce((acc,item,ind,arr)=>{
//     console.log(acc)
//     return ind*5
// })

// console.log(x);

let sum = arr.reduce((acc,item)=>{
    return acc+item;
})

console.log(sum)