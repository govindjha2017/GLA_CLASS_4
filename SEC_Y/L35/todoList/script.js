const taskList = document.querySelector('.taskList')
const btn = document.getElementById('btn');
const inp = document.getElementById('inp')
btn.addEventListener('click',()=>{
    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML= `<div class="section-A">
                    <input type="checkbox" class="check">
                    <p>${inp.value}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">↑</span>
                    <span class="bin">&#128465</span>
                    <span class="down-arrow">↓</span>
                </div>`

    taskList.append(div);
    inp.value=""
})


taskList.addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('class'))
    if(e.target.getAttribute('class')=="check"){
        e.target.nextElementSibling.classList.toggle('checked')
    }
    else if(e.target.getAttribute('class')=="bin"){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.getAttribute('class')=="up-arrow"){
        let currTask = e.target.parentElement.parentElement;
        let prevTask = currTask.previousElementSibling;
        if(prevTask){
            prevTask.before(currTask);
        }
    }
    else if(e.target.getAttribute('class')=="down-arrow"){
        let currTask = e.target.parentElement.parentElement;
        let nextTask = currTask.nextElementSibling;
        if(nextTask){
            nextTask.after(currTask);
        }
    }

})