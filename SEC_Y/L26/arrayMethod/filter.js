var arr = [23,45,66,72];

let filterArr = arr.filter((item,ind,arr)=>{
    if(item%2==0){
        return true;
    }
})

console.log(filterArr)