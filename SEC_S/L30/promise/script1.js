function kalMilneAayega(x){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(x){
                resolve('to main tujhe party dunga')
            }
            else{
                reject('Chalo koi nhi')
            }
        },5000)
    })
}

console.log("start")

kalMilneAayega(!true)
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })

console.log("end");