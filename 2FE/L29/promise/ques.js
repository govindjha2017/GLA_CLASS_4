let pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise resolved data');
    },10000)
})


console.log('start');

pr1
    .then((x)=>{console.log(x)});

console.log('END');