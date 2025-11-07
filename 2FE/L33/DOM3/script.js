
// // const city = document.querySelectorAll('li')[2];
// const city = document.getElementsByTagName('li')[2];
// city.style.backgroundColor="blue";

// let x = city.previousElementSibling;
// console.log(x);
// x.style.border="2px solid red"

// let y = city.nextElementSibling;
// y.style.border="2px solid red"

// const parent = city.parentElement

// parent.style.border="5px solid green";


// const ul = document.querySelector('ul');

// console.log(ul.children[4]);

// ul.children[4].style.fontSize="2em";

// city.parentElement.previousElementSibling.style.color="blue";

// const para = document.createElement('p');
// console.log(para);
// para.innerText ="this is para"

const div = document.createElement('div');
console.log(div);

const body = document.querySelector('body');
body.append(div);

const h1 = document.createElement('h1');
h1.setAttribute('id','head');
h1.innerText="City";
console.log(h1);

div.append(h1);

const ul = document.createElement('ul');
div.append(ul);

const child1 = document.createElement('li');
child1.innerText="Delhi"
ul.append(child1);

const child2 = document.createElement('li');
child2.innerText="Kolkata"
ul.append(child2);

const child3 = document.createElement('li');
child3.innerText="Mumbai"
ul.append(child3);

const child4 = document.createElement('li');
child4.innerText="Banglore"
ul.append(child4);