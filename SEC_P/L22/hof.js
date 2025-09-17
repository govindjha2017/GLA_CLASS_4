
let a = ()=>{
    let money = 20;
    console.log(money);
}

function fun(b){
    var x = 10;
    console.log(x);
    b()
}

fun(a)

console.log("end");



function outer(){
    function inner(){
        var a = 11;
        console.log(a);
    }
    return inner
}