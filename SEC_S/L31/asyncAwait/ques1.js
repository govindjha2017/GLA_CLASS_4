function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise1 resolved data');
        },10000);
    })
}
function fun2(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise2 resolved data');
        },20000);
    })
}
console.log('start');
async function handlePromise(){
    console.log('Hello World');
    let data1 = await fun1();
    console.log(data1);
    console.log('console after resolved');
    let data2 = await fun2();
    console.log(data2);
}
handlePromise();
console.log('End');