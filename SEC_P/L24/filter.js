var arr = [34,65,13,78,43];


let filterArr = arr.filter((item,ind,arr)=>{
        if(item%2==0){
            return true
        }
})

console.log(filterArr)