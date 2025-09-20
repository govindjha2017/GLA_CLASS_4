

function fun(cb){
    var a=11;
    console.log(a);
    cb()
}

// let cb = function (){
//     console.log('inside CB function');
// }

let cb = ()=>{
    console.log('inside CB function');
}

fun(cb);