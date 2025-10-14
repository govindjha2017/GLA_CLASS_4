var cb = ()=>{
    console.log('inside CB function')
}


function fun(y){
    console.log(y)
    // var x = ()=>{
    //     console.log('inside x fdunction')
    // }
    // return  x;
}

var a = fun(cb);