const formTasks = document.querySelector('form.task_input');
const divAdd = document.querySelector('div.tasks');
const listItems = document.getElementsByClassName('task');
const inputAdd = document.querySelector('input.toDoAddTask')

const toDoList = [];



const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if(titleTask === "") return; 
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.innerHTML = `<span class="task_name"> ${titleTask}</span>  <button type="submit" class="deleteTask_btn">X</button>`;

    toDoList.push(newTask)
    renderList()

    divAdd.appendChild(newTask);
    inputAdd.value = "";

    newTask.querySelector('.deleteTask_btn').addEventListener
    ('click', removeAddTask)

    // newTask.querySelector('.checkTask_btn').addEventListener
    // ('click', checkAddTask)
}

formTasks.addEventListener('submit', addTask)


const removeAddTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    renderList();
}

const renderList = () => {
    divAdd.textContent = "";
    toDoList.forEach((toDoElement, key) => {
     toDoElement.dataset.key = key;
     divAdd.appendChild(toDoElement);
    })
   }
   formTasks.addEventListener('submit', addTask)

