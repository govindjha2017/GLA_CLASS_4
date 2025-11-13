const btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    console.log("hello")
    console.log(e.target);
})

const head = document.querySelector('#head');

head.addEventListener('copy',(e)=>{
    console.log(e.target);
    e.target.innerText="kuchh bhi"
})