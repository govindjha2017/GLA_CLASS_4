
// async function fun(){
//     return "hello"
// }

// let x = fun();
// console.log(x);


let pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise resolved data')
    },4000)
})


// pr1
//     .then((x)=>{
//         console.log(x);
//     })

async function fetchData(){
    let x = await pr1;
    console.log(x);
}

fetchData()