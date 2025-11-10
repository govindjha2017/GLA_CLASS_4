// const head = document.getElementById('head');
const head = document.querySelector('#head')
console.log(head);

head.style.color="red";
head.style.border="2px solid green"

// const paragaph = document.getElementsByTagName('p');
const paragaph = document.querySelectorAll('p');
console.log(paragaph);

for(let para of paragaph){
    para.style.border="2px solid black"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara= document.querySelectorAll('.spclPara');
console.log(spclPara);

for(let para of spclPara){
    para.style.color="yellow";
    para.style.fontSize ="1.5em"
}