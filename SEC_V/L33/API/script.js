const container = document.querySelector('.container');

const URL ="https://official-joke-api.appspot.com/random_joke"

fetch(URL)
    .then((res)=>{
        // console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        const h2 = document.createElement('h2');
        h2.innerText=data.setup;
        container.append(h2);

        const h3 = document.createElement('h3');
        h3.innerText=data.punchline;
        h3.style.color="green"

        setTimeout(() => {
            container.append(h3);
        }, 4000);
    })