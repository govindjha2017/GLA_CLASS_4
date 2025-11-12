
const img = document.getElementsByTagName('img')[0];

// setAttribute , getAttribute , 

img.setAttribute('src','https://images.unsplash.com/photo-1762656668994-57d8933d59dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687');
img.style.height="300px";

console.log(img.getAttribute('src'));

img.removeAttribute('src');

img.setAttribute('src','https://plus.unsplash.com/premium_photo-1756142083651-81340ebf90af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')


const para = document.querySelector('p');

para.setAttribute('class','one');
para.setAttribute('class','two');
console.log(para.getAttribute('class'));
para.removeAttribute('class');

para.setAttribute('class','one two');
para.removeAttribute('class');


para.classList.add('one');
para.classList.add('two');

para.classList.remove('one');

console.log(para.classList.contains('two'));

para.classList.toggle('one')
para.classList.toggle('one')
para.classList.toggle('one')