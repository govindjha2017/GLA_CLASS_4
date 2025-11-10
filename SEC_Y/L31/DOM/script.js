// const head = document.getElementById('head');
const head = document.querySelector('#head');
console.log(head);

head.style.color="red";
head.style.border="2px solid green"

// const paragraph = document.getElementsByTagName('p');
const paragraph = document.querySelectorAll('p');
console.log(paragraph);

for(let para of paragraph){
    para.style.border="2px solid red"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara')
for(para of spclPara){
    para.style.color="blue";
    para.style.fontSize="1.4em"
}