 const btn = document.querySelector('#btn');
 const inp = document.getElementById('inp');
 const taskList = document.querySelector('.taskList')
 btn.addEventListener('click',()=>{
      console.log(inp.value)

      const str = `
                <input type="checkbox">
                <p>${inp.value}</p>
                <div>
                    <span>↑</span>
                    <span>&#128465</span>
                    <span>↓</span>
                </div>
            `

        const div = document.createElement('div');
        div.classList.add('task')
        div.innerHTML=str;
        taskList.append(div);
 })