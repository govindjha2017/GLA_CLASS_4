
function abc(){
    console.log("hello")
    const head = document.querySelector('#head');
    head.style.color="red"
}

function paraIn(){
    const para = document.querySelector('p');
    para.style.color="yellow";
    para.style.fontSize="1.35em"
}

function paraOut(){
    const para = document.querySelector('p');
    para.style.color="black";
    para.style.fontSize="1em"
}

function copyFun(){
    const div= document.querySelector('div');
    div.innerText="hello"
}

const head = document.querySelector('#head2');
head.addEventListener('click',(e)=>{
    console.log("asdkj")
    console.log(e.target)
})


const h3 = document.querySelector('h3');

h3.addEventListener('mousedown',(e)=>{
    console.log("abc")
    e.target.style.color="blue"
})