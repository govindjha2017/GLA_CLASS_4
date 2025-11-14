// const city = document.querySelectorAll('li')[2];

// city.style.backgroundColor="yellow";

// let x = city.previousElementSibling;
// x.style.color="blue"

// let y = city.nextElementSibling;
// y.style.color="blue"

// const parent = city.parentElement;
// parent.style.border="2px solid red"

// parent.children[4].style.color="grey"

// city.parentElement.previousElementSibling.style.color="green"

// const para = document.createElement('p');
// para.innerText="hello"
// console.log(para)


const div = document.createElement('div');
console.log(div);

const body = document.querySelector('body');

body.append(div);

const h1 = document.createElement('h1');
h1.innerText="city";

div.append(h1);

const ul = document.createElement('ul');
div.append(ul)

const li1 = document.createElement('li');
li1.innerText="kolkata"
ul.append(li1)

const li2 = document.createElement('li');
li2.innerText="Delhi"
ul.append(li2)