strings = ["Hello", " ", "world", "!"];

// How can you use the reduce() function to concatenate 
// strings in an array?

let x = strings.reduce((acc,item)=>{
     return acc+item;
})

console.log(x);