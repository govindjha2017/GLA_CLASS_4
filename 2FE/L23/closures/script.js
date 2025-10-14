
function outer(){
    var a = 10;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

var x = outer();
x()