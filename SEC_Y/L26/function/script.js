
function fun(){
    var x = 20;
    return x;
}

var y = fun;
// console.log(y);

var p = fun();

console.log(p);


// Arrow function

// function add(a,b){
//     return a+b;
// }

var add = (a,b)=>{
  return a+b;
}