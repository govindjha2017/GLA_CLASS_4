function abc(){
    console.log("clicked")

    const h1 = document.querySelector('h1');
    h1.style.color="red";
    h1.style.border="2px solid black"
}

function mouseIn(){
    const para = document.querySelector('p');
    para.style.color="blue";
    para.style.fontSize="1.4em"
}

function mouseOut(){
    const para = document.querySelector('p');
    para.style.color="black";
    para.style.fontSize="1em"
}

function copyFun(){
    const div = document.querySelector('div');
    div.innerText="hello"
}


const h2 = document.querySelector('h2');

h2.addEventListener('click',(e)=>{
   console.log("h2 element clicked");
   console.log(e.target)
   e.target.style.color="green"
})


const para = document.getElementById('para');

para.addEventListener('dblclick',(e)=>{
    e.target.style.border="2px solid green"
})