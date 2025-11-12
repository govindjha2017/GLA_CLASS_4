const head = document.getElementById('head');
head.style.color="red";

const city = document.querySelectorAll('li')[2];
console.log(city)
city.style.color="red";


let x = city.previousElementSibling;
console.log(x);
x.style.backgroundColor="grey"

let y = city.nextElementSibling;
console.log(y);
y.style.backgroundColor="grey";

const parent = city.parentElement;
parent.style.border="2px solid red"

console.log(parent.children[4])

parent.children[4].style.color="green"


city.parentElement.previousElementSibling.style.border="2px solid green"