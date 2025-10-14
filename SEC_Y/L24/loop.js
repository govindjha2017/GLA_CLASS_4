
var arr = [34,56,78,19];

// Normal Loop

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for of loop

// for(let item of arr){
//     console.log(item)
// }


var obj = {
    "firstName":'rahul',
    age:18,
    "city":'delhi',
    'sem':5,
    marks:[6.5,6.3,7.1,5.4,4.5],
    key:34
}

for(let key in obj){
    console.log(key);
    // console.log(obj.key)
    console.log(obj[key])
}