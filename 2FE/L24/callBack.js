
function fun(y){
    console.log('inside fun function')
    y();
    y()
     y()
      y()
}

let x = ()=>{
    console.log('inside x');
}

fun(x);