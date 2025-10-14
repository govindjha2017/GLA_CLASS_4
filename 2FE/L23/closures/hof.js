// function fun (){
//     // var x = 20;
//     var x = ()=>{
//         console.log('inside x function')
//     }
//     return x;
// }

// var p = fun;
// var a = fun()
// console.log(a);

let cb = ()=>{
    console.log('inside CB function')
}

function outer(y){
    console.log(y);
}

outer(cb)