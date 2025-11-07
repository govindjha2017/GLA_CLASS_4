
// async function fun(){
//     let x= "Hello";
//     return x;
// }

// let y = fun();
// console.log(y);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolved data');
    },4000)
})

// pr
//     .then((x)=>{
//         console.log(x);
//     })

async function fetchData(){
    let x = await pr;
    console.log(x);
}
fetchData()