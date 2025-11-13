// const para = document.createElement('p');
// para.innerText="hello"
// para.innerHTML= "<h1>Hello</h1>"
// console.log(para)


const div = document.createElement('div');
console.log(div);

const h1 = document.createElement('h1');
h1.innerText="city"

div.append(h1);

const body = document.querySelector('body');
body.append(div);

const ul = document.createElement('ul');
div.append(ul);

const li1= document.createElement('li');
li1.innerText="delhi";
ul.append(li1);

const li2= document.createElement('li');
li2.innerText="banglore";
ul.append(li2);

const li3= document.createElement('li');
li3.innerText="Mumbai";
ul.append(li3);

const li4= document.createElement('li');
li4.innerText="kolkata";
ul.append(li4);