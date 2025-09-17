console.log('start');
var x = 10;
function outer(){
    var p = 20;
    console.log(x);
    console.log(p);
}

outer();

console.log(x);
console.log(p);
console.log("end");