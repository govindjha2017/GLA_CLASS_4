const btn = document.querySelector('#btn');
const inp = document.getElementById('inp');
const taskList = document.querySelector('.taskList')
btn.addEventListener('click',()=>{
    let str =  ` <div class="section-A">
                    <input type="checkbox" class="check">
                    <p>${inp.value}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">↑</span>
                    <span class="bin">&#128465</span>
                    <span class="down-arrow">↓</span>
                </div>`

    let div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML=str;
    taskList.append(div);
    inp.value=""
})

taskList.addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('class'));
    if(e.target.getAttribute('class')=="bin"){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.getAttribute('class')=="check"){
        e.target.nextElementSibling.classList.toggle('checked')
    }
     else if(e.target.getAttribute('class')=="up-arrow"){
        let currElem = e.target.parentElement.parentElement;
        let newElem = currElem.previousElementSibling;
        newElem.before(currElem);
    }
     else if(e.target.getAttribute('class')=="down-arrow"){
        let currElem = e.target.parentElement.parentElement;
        let newElem = currElem.nextElementSibling;
        newElem.after(currElem);
    }
})