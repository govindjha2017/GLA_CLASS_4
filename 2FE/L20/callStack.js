var money = 50;
function outer(){
    var x = 20;
    console.log(money)
    function inner(){
        console.log(a);
        var a = 10;
        console.log(a);
        console.log(x);
    }
    inner();
}

outer();
console.log(x);
console.log(money);