console.log('start');
var x = 20;
function outer(){
    console.log(a);
    var a = 10;
    console.log(a);
    console.log(x);
    console.log(b);
    let b = 30;
    console.log(b);
}
console.log(x);
outer();
console.log(a);
console.log('end');