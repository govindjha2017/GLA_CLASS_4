const inp = document.getElementById('inp')
const btn = document.querySelector('#btn');
const taskList = document.querySelector('.taskList');

btn.addEventListener('click',()=>{
    console.log(inp.value);
    const div = document.createElement('div');
    div.classList.add('task');

    let str = ` <div class="section-A">
                    <input type="checkbox">
                    <p>${inp.value}</p>
                </div>
                <div class="section-B">
                    <span>↑</span>
                    <span>&#128465</span>
                    <span>↓</span>
                </div>`
    div.innerHTML=str;
    taskList.append(div);
    inp.value=""
})