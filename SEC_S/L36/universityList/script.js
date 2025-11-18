const URL = "http://universities.hipolabs.com/search?country=";
const container = document.querySelector('.container')
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
btn.addEventListener('click',()=>{
     const APILINK = URL+inp.value

     fetch(APILINK)
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            // console.log(datas);

            for(let data of datas){
                console.log(data)
                const h3 = document.createElement('h3');
                h3.innerText=data.name;
                

                const state = document.createElement('h3');
                state.innerText= data["state-province"];

                console.log(state);

                const div = document.createElement('div');
                div.style.display="flex";
                div.style.justifyContent="space-between"


                div.append(h3);
                div.append(state);
                container.append(div);

            }
        })
})