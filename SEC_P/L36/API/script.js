
const URL ="https://official-joke-api.appspot.com/random_joke";
const container = document.getElementById('container')

// fetch(URL)
//     .then((res)=>{
//         // console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })

const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    fetch(URL)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            console.log(data.setup);

            const h1 = document.createElement('h1');
            console.log(h1);
            h1.innerText=data.setup;
            container.append(h1);

            setTimeout(() => {
                const h2 = document.createElement('h2');
                h2.innerText=data.punchline

                container.append(h2);
            }, 5000);
        })
})

