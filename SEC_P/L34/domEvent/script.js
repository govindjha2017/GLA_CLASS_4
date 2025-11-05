const head = document.getElementById('head');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    console.log('clicked');
    head.style.color="red"
})

head.addEventListener('copy',(e)=>{
    console.log("copy");
    console.log(e.target);
    e.target.innerText="kcuhh bhi"
})