
// function fun(){
//     // var x = 20;
//     var x = ()=>{
//         console.log('inside x function')
//     }
//     return x;
// }

// var p = fun();

var a = ()=>{
    console.log('inside x function')
}

function outer(y){
    var x= 20;

}

outer(a);