console.log('start');
var x = 20;
function outer(){
    console.log(a);
    var a = 10;
    console.log(a);
    console.log(x);
    // console.log(p)
}
console.log(x);
outer();
console.log(a);
console.log('end');