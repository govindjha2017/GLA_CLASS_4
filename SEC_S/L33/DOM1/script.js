const img = document.querySelector('img');

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1692640261941-bda4bcb52e1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170');
img.style.height="250px";

console.log(img.getAttribute('src'));

img.removeAttribute('src');
img.setAttribute('src','https://images.unsplash.com/photo-1762543410696-f0ac36534163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686');

const para = document.querySelector('p');

para.setAttribute('class','one');
para.setAttribute('class','two');
para.setAttribute('class','one two');

console.log(para.getAttribute('class'));
para.removeAttribute('class');

// classList :- add remove contains toggle

para.classList.add('one');
para.classList.add('two');
para.classList.remove('one');

console.log(para.classList.contains("two"));

para.classList.toggle('one')
para.classList.toggle('one')
para.classList.toggle('one')


const city = document.querySelectorAll('li')[2];
console.log(city);

let x = city.previousElementSibling;
x.style.color="red";

let y = city.nextElementSibling;
y.style.color="red";

const parent = city.parentElement;
parent.style.border="2px solid blue"

console.log(parent.children[4]);

parent.children[4].style.color="green"


city.parentElement.previousElementSibling.style.color="grey"