let arr = [23,45,66,42];

arr.reduce((acc,item,ind,arr)=>{
    // console.log("hello");
    // console.log(item,ind,arr)

    console.log(acc);

    return item-5;
},"kuchh bhi")