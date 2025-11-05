
// async function fun(){
//     let x ="hello";
//     return x;
// }

// let y = fun();

// console.log(y);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [33,44,55,66];
        resolve(arr)
    },5000)
})

// pr
//     .then((data)=>{
//         console.log(data);
//     })


async function fetchData(){
    let data = await pr;
    console.log(data);
}

fetchData()