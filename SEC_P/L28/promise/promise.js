let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let data = [34,56,78]
        resolve(data)
    },5000)

    //  setTimeout(()=>{
    //     let data = 'promise rejected data'
    //     reject(data)
    // },5000)
})

console.log(pr);

console.log('start');
pr
    .then((x)=>{
        console.log(x)
    })
    .catch((x)=>{
        console.log(x);
    })

console.log('end');