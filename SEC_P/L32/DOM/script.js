const x = document.getElementById('head');

x.style.color="blue"

const y = document.getElementsByTagName('h1')[0];

const z = document.querySelector('#head');

const p = document.querySelector('h1');

const q  = document.querySelectorAll('h1')[0];


q.style.border="2px solid red";

q.innerText="Hello"

// setAttribute getAttribute removeAttribute

// z.setAttribute('class','abc')

// add , reomve , toggle

z.classList.add('abc')