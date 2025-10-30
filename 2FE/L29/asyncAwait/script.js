
// async  function fun(){
//    let data ="hello" ;
//    return data;
// }

// let x = fun();

// console.log(x);


let pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise resolved data');
    },10000)
})

// pr1
//     .then((x)=>{console.log(x)})
//     .catch((x)=>{console.log(x)});

async function fetchData(){
   let x = await pr1;
   console.log(x);
}

fetchData()