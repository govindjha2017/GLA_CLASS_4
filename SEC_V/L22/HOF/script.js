
// function fun(){
//     var x= 20;
//     return x;
// }

// var y = fun ;
// var z = fun()

// console.log(z);


function fun(){
    function inner(){
        console.log('inside inner')
    }
    return inner;
}

var y = fun();
console.log(y);

var p = ()=>{
    console.log('ionside p functiuon')
}

function outer(p){
    console.log(p)
}

outer(p)