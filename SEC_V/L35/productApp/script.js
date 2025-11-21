const URL ="https://dummyjson.com/products";
const container = document.querySelector('.container');
fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        // console.log(data.products);
        for(let productData of data.products){
            // console.log(productData);

            const div = document.createElement('div');
            div.style.border="2px solid black"

            div.style.width="250px"
            const h3 = document.createElement('h3');
            h3.innerText=productData.title;

            const img = document.createElement('img');
            img.setAttribute('src',productData.thumbnail);
            img.style.height="200px"
            img.style.width="200px"

            const price = document.createElement('p');
            price.innerText="$"+productData.price

            div.append(img)
            div.append(h3);
            div.append(price);

            container.append(div);
        }
    })


const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
btn.addEventListener('click',()=>{
    container.innerText=""
    const LINK = "https://dummyjson.com/products/search?q="
    const APILINK = LINK + inp.value;
    fetch(APILINK)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);

             for(let productData of data.products){
            // console.log(productData);

            const div = document.createElement('div');
            div.style.border="2px solid black"

            div.style.width="250px"
            const h3 = document.createElement('h3');
            h3.innerText=productData.title;

            const img = document.createElement('img');
            img.setAttribute('src',productData.thumbnail);
            img.style.height="200px"
            img.style.width="200px"

            const price = document.createElement('p');
            price.innerText="$"+productData.price

            div.append(img)
            div.append(h3);
            div.append(price);

            container.append(div);
        }
        })
})