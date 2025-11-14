function abc(){
    console.log("clicked")
    const h1 = document.querySelector('h1');
    h1.style.color="green"
}

function copyFun(){
    console.log("copy fun")
}

const h2 = document.querySelector('h2');
// h2.addEventListener('click',(e)=>{
//     console.log(e.target);
//     e.target.style.color="red";
// })

h2.addEventListener('mousedown',(e)=>{
    console.log(e.target);
    e.target.style.color="red";
})

const div = document.querySelector('div');

div.addEventListener('mouseenter',(e)=>{
    e.target.style.border="2px solid blue"
})