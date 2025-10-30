function kalMilneAayega(x){
    let pr =  new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(x=="yes"){
                resolve('to main tujhe party dunga !')
            }
            else{
                reject('chalo koi baat nhi');
            }
        },4000)
    })
   
    return pr;
}
kalMilneAayega('no')
    .then((x)=>{console.log(x)})
    .catch((x)=>{console.log(x)})