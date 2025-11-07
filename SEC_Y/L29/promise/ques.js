let pr = new Promise((resolve, reject) => {
     setTimeout(()=>{
        let arr = [33,44,55,66]
        resolve(arr);
    },6000)
})
console.log('start')
pr
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })

console.log("End");