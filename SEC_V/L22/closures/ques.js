var a=20;
var x=50;
function outer(){
    var x=40;
    function inner(){
        var a=30;
        console.log(a);
        x++;
        console.log(x);  
    }
    return inner;
}
var p =outer();
p();
p();
var x = outer();
x()