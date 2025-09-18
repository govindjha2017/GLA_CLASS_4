// let a = ()=>{
//     console.log('inside a function')
// }

// function fun(b){
//     var x = 100;
//     console.log(x);
//     b()
// }

// fun(a)


function outer(){
    var x = 25;
    function inner(){
        console.log(x);
    }

    return inner
}

var y = outer();
console.log(y);

y();