function kalMilneAayega(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x){
                resolve('to main tujhe party dunga!')
            }
            else{
                reject('chalo koi nhi')
            }
        }, 4000);
    })
}

kalMilneAayega(!true)
    .then((x)=>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })