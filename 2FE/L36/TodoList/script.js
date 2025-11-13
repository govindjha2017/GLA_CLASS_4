 const btn = document.querySelector('#btn');
 const inp = document.getElementById('inp');
 const taskList = document.querySelector('.taskList')
 btn.addEventListener('click',()=>{
      console.log(inp.value)

      const str = `<input type="checkbox" class="check">
                <p>${inp.value}</p>
                <div>
                    <span class="up-arrow">↑</span>
                    <span class="bin">&#128465</span>
                    <span class="down-arrow">↓</span>
                </div>`

        const div = document.createElement('div');
        div.classList.add('task')
        div.innerHTML=str;
        taskList.append(div);
        inp.value=""
 })


 taskList.addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('class'));

    if(e.target.getAttribute('class')=="check"){
        e.target.nextElementSibling.classList.toggle('checked')
    }
    else if(e.target.getAttribute('class')=="bin"){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.getAttribute('class')=="up-arrow"){
        let currTask = e.target.parentElement.parentElement;
        console.log(currTask);
        let newTask = e.target.parentElement.parentElement.previousElementSibling;
        console.log(newTask);
        newTask.before(currTask);
    }
    else if(e.target.getAttribute('class')=="down-arrow"){
        let currTask = e.target.parentElement.parentElement;
        console.log(currTask);
        let newTask = e.target.parentElement.parentElement.nextElementSibling;
        console.log(newTask);
        newTask.after(currTask);
    }

 })