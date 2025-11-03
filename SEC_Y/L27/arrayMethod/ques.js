let arr = [23,45,66,28,75];

let sum = arr.reduce((acc,item)=>{
    return acc+item;
},0)

console.log(sum);