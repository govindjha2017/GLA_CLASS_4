
// async function fun(){
//     let x = "hello";
//     return x;
// }

// let y = fun();
// console.log(y);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [33,44,55,66];
        resolve(arr)
    },4000)
})

// pr
//     .then((x)=>{
//         console.log(x);
//     })

console.log('start')

async function fetchData(){
    let x = await pr;
    console.log(x);

}

fetchData();
console.log("end");