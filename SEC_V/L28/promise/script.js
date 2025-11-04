let pr = new Promise((resolve, reject) => {
    // setTimeout(()=>{
    //     resolve('promise resolved data');
    // },4000)
    setTimeout(()=>{
        reject('promise rejected data');
    },4000)
})

// console.log(pr);

console.log('start')

pr
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })

console.log('end');