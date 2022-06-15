document.addEventListener("DOMContentLoaded", () => {
  let taskInput = document.getElementById('new-task-description');
  let taskList = document.getElementById('tasks');
  let newTaskForm =document.getElementById('create-task-form');
  let listData = {};

  let priorityList = document.getElementById('priorityList');
  // let mediumPriority = document.getElementById('medium');
  // let lowPriority = document.getElementById('low');

  newTaskForm.addEventListener('submit', function(e){
    e.preventDefault();
    let delBtn = document.createElement('button');
    let priorityList = document.getElementById('priorityList');
    let priority = priorityList.options[priorityList.selectedIndex].text;
    
    let list = document.createElement('li');

    list.textContent = taskInput.value;
    if(priority==='High'){
      list.style.backgroundColor = 'red';
    } else if (priority==='Medium'){
      list.style.backgroundColor = 'yellow';
    } else if (priority==='Low'){
      list.style.backgroundColor = 'green';
    }
    delBtn.innerText ='X';
    
    list.append(delBtn);
    taskList.appendChild(list);
    
    e.target.reset();
  });

  taskList.addEventListener('click', function(e){
    if (e.target.tagName ==='BUTTON'){
      e.target.parentNode.remove()
    };
  });
});
