
const URL ="https://dummyjson.com/products"
const container = document.querySelector('.container');
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.gap="20px"

fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((datas)=>{
        console.log(datas.products);
        for(let data of datas.products){
            const div = document.createElement('div');
            div.style.width="300px"
            const img = document.createElement('img');
            img.setAttribute('src',data.thumbnail);
            img.style.height="150px"
            const h2 = document.createElement('h2');
            h2.innerText=data.title;

            const price = document.createElement('p');
            price.innerText=data.price

            div.style.border="2px solid black"
            div.append(img)
            div.append(h2);
            div.append(price)
            container.append(div);
        }
    })
    


const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    const inp = document.getElementById('inp');
    const URL = "https://dummyjson.com/products/search?q="
    const API = URL+inp.value;
    fetch(API)
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            container.innerHTML=""
            console.log(datas);

             for(let data of datas.products){
            const div = document.createElement('div');
            div.style.width="300px"
            const img = document.createElement('img');
            img.setAttribute('src',data.thumbnail);
            img.style.height="150px"
            const h2 = document.createElement('h2');
            h2.innerText=data.title;

            const price = document.createElement('p');
            price.innerText=data.price

            div.style.border="2px solid black"
            div.append(img)
            div.append(h2);
            div.append(price)
            container.append(div);
        }
        })
})