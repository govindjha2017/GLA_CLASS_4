let pr = new Promise((resolve, reject) => {
    // setTimeout(()=>{
    //     resolve("resolved data")
    // },5000)
     setTimeout(()=>{
        reject("rejected data")
    },5000)
})

// console.log(pr);


pr
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })