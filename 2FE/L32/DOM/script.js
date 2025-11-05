// const head = document.getElementById('head');
const head = document.querySelector('#head')

console.log(head);
head.style.color="red";
head.style.border="2px solid green";
head.style.width= "300px";

// const paragraph = document.getElementsByTagName('p');
const paragraph = document.querySelectorAll('p');
console.log(paragraph);
for(let para of paragraph){
    para.style.color="blue";
    para.style.border="2px solid black"
}
paragraph[2].style.color="green"

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara')

for(let x of spclPara){
    x.style.border="5px solid black"
}


let x = document.querySelector('p');
let y = document.querySelectorAll('p');

console.log(x);
console.log(y);