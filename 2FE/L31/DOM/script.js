
const head = document.getElementById('head');
console.log(head);

head.style.border='2px solid red';
head.style.backgroundColor="grey";

const head1 = document.getElementsByTagName('h1');

console.log(head1[0]);

const favCity = document.getElementsByClassName('favCity');

console.log(favCity);

for(let city of favCity){
    console.log(city);
    city.style.color="blue"
}