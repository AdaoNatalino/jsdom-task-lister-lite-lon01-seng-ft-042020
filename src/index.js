document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addList)


  function addList(e) {
    e.preventDefault();
    const taskList = document.getElementById('tasks')
    const list = document.createElement('li');
    const priority = e.target[1].value
    list.textContent = e.target[0].value
    if (priority == 'red') { list.style.color = 'red'};
    if (priority == 'yellow') { list.style.color = 'yellow'};
    if (priority == 'green') { list.style.color = 'green'};
    // debugger
    taskList.append(list);
    document.getElementById('create-task-form').reset();
    list.addEventListener('click', function (e) {
      e.target.remove();
    }) 

  }
 
  
});


