let arr = [23,46,18,37,66,13];

let filterArr =  arr.filter((item,ind,arr)=>{
    if(item>30){
        return true
    }
})

console.log(filterArr);