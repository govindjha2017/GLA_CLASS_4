
const URL = "http://universities.hipolabs.com/search?country="

const inp = document.getElementById('inp');

const btn = document.getElementById('btn');
const container = document.querySelector('.container');
btn.addEventListener('click',()=>{
    const API = URL+inp.value;
    // console.log(API);
    fetch(API)
        .then((res)=>{
            return res.json();
        })
        .then((datas)=>{
            for(let data of datas){
                console.log(data);
                const p = document.createElement('p');
                p.innerText= data.name
                const div = document.createElement('div');
                div.append(p);
                container.append(div);
            }
        })

})