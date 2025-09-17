
var arr = [34,12,"hello",56,72];

// for(let i=0 ; i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let item of arr){
//     console.log(item);
// }

var obj = {
    name:'kaju',
    rollNo: 32,
    sec:"p",
    city:'Delhi',
    key:11
}

for(let key in obj){
    console.log(key)
    // console.log(obj.key);
    console.log(obj[key]);
}
