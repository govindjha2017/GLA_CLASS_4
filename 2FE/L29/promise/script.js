let pr = new Promise((resolve, reject) => {
    // setTimeout(()=>{
    //     let arr = [2,4,5,6];
    //     // resolve('promise resolved data');
    //     resolve(arr);
    // },5000)

    setTimeout(()=>{
        reject('promise rejected data');
    },5000)
})

// console.log(pr);



pr
    .then((x)=>{
        console.log("hello");
      console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })