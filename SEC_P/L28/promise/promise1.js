function kalMilneaAayega(x){
  let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(x){
        resolve("to main tujhe party dunga")
    }
    else{
        reject("chalo koi baat nhi")
    }
    },4000)
  })
  return pr;
}
console.log("start")
kalMilneaAayega(!true)
    .then((x)=>{console.log(x)})
    .catch((x)=>{console.log(x)})


console.log("end");