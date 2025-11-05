// const head = document.querySelector('#head');
// // console.log(head);

// head.style.color="red";

// // const city = document.querySelector('li');
// const city = document.querySelectorAll('li')[2];
// console.log(city);

// city.style.border="2px solid black";
// city.style.width='100px'
// city.style.backgroundColor="teal";

// let x = city.previousElementSibling;
// x.style.color="blue"
// console.log(x);

// let y = city.nextElementSibling;
// y.style.color="blue"

// city.previousElementSibling.previousElementSibling.style.border="2px solid red"


// const parent = city.parentElement;

// parent.style.border="2px solid green"


// const ul = document.querySelectorAll('ul')[0];

// console.log(ul.children);
// ul.children[4].style.color="green"


// const para = document.createElement('p');
// para.innerText="hello this is paragraph"
// console.log(para);

const div = document.createElement('div');
console.log(div);
const body = document.querySelector('body');
body.append(div);

const h1 = document.createElement('h1');
h1.innerText="city";
h1.setAttribute('id','head');
div.append(h1);

const ul = document.createElement('ul');
const child1 = document.createElement('li');
child1.innerText="Delhi";
ul.append(child1);

const child2 = document.createElement('li');
child2.innerText="Kolkata";
ul.append(child2);

div.append(ul);