const body = document.querySelector('body');

const div = document.createElement('div');
body.append(div)

const h1 = document.createElement('h1');
h1.innerText="city"
console.log(h1);

div.append(h1);


const ul = document.createElement('ul');
div.append(ul);

const li1= document.createElement('li');
li1.innerText="Mumbai"
ul.append(li1);

const li2= document.createElement('li');
li2.innerText="Kolkata"
ul.append(li2);

const li3= document.createElement('li');
li3.innerText="Delhi"
ul.append(li3);

const li4= document.createElement('li');
li4.innerText="pune"
ul.append(li4);

const para = document.getElementById('para');
// para.innerText="<h1>hello</h1>"

para.innerHTML="<h1>hello</h1>"