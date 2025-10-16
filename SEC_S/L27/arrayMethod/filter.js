
let arr = [23,45,76,18,46];

let filterArr = arr.filter((item,ind,arr)=>{
    // if(item>30){
    //     return true;
    // }
    if(item%2==0){
        return true;
    }
});


console.log(filterArr);