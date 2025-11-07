
const head = document.getElementById('head');

head.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.style.border="2px solid green"
})

const para = document.querySelector('.para');

para.addEventListener('mouseenter',(e)=>{
    //  console.log("achgj")
    console.log(e.target);
    e.target.style.fontSize="2em";
    e.target.style.backgroundColor="yellow";
})

para.addEventListener('mouseleave',(e)=>{
    //  console.log("achgj")
    console.log(e.target);
    e.target.style.fontSize="1em";
    e.target.style.backgroundColor="white";

})


const div = document.getElementsByTagName('div')[0];

div.addEventListener('copy',(e)=>{
    console.log(e.target);

})

function fun(){
    console.log('clicked')
}

function abc(e){
   const span = document.querySelector('span');
   span.style.color="blue"
}