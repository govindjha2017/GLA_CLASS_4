var x = 15;
function outer(){
    var a = 20;
    console.log(x);
    function inner(){
        var a=10;
        console.log(a)
    }
    inner()
    console.log(a);
}
outer()
console.log(a)
console.log('end');