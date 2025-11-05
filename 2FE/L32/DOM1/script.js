// const para = document.querySelectorlAll('p')[0];
const para = document.querySelector('p');

para.setAttribute('class','one');
para.setAttribute('class','two');
para.setAttribute('class','one two');

para.removeAttribute('class');

const img = document.querySelector('img');

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1757260019141-458516170c6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735');

img.style.height="250px";

console.log(img.getAttribute('src'))


// classList :- add remove contains toggle


para.classList.add('one');
para.classList.add('two');

para.classList.remove('two');

// console.log(para.classList.contains('two'));
console.log(para.classList.contains('one'));

para.classList.toggle('two');
para.classList.toggle('two');
para.classList.toggle('two');