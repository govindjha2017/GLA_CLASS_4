
function outer(){
    var x = 20;
    function inner(){
        var a = 10;
        console.log(a)
       console.log(x);
    }
    return inner;
}

var p  = outer();
p()