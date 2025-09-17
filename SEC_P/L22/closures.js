var money =50;
function outer(){
    var a = 10;
    function inner(){
        console.log(a);
        console.log(money);
    }
    return inner;
}

var x = outer();

console.log(x);

x();