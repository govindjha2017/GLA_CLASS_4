
// const head = document.getElementById('head');
const head = document.querySelector('#head');
console.log(head);

head.style.border="2px solid green";
head.style.color="blue"
head.style.width="300px"


// const paragraph = document.getElementsByTagName('p');
const paragraph = document.querySelectorAll('p')
console.log(paragraph);

for(let para of paragraph){
    para.style.border="2px solid blue"
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara');
console.log(spclPara);

for(let para of spclPara){
    para.style.border="5px solid green";
    para.style.color="grey"
}