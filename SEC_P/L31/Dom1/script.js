// const img = document.querySelector('img')
const img = document.querySelectorAll('img')[0];

img.setAttribute('src','https://images.unsplash.com/photo-1761602545494-4cd002b4d2b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1121')

// img.style.height="200px"

img.setAttribute('class','one');

// img.setAttribute('class','two')

img.setAttribute('class','one two')

console.log(img.getAttribute('src'));

img.removeAttribute('src');

img.removeAttribute('class');

img.setAttribute('src','https://images.unsplash.com/photo-1761602545494-4cd002b4d2b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1121')


img.classList.add('one');
img.classList.add('two');

img.classList.remove('two');

img.classList.toggle('two');

img.classList.toggle('two');