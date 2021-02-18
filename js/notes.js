const formNotes = document.querySelector('form.note_input');
const divAddNote = document.querySelector('div.notes_blocks');
const listNotes = document.getElementsByClassName('noteblock');
const inputAddNotes = document.querySelector('input.addNotes')

const notesList = [];



const addNote = (e) => {
    e.preventDefault();
    const titleTask = inputAddNotes.value;
    if(titleTask === "") return; 
    const newTask = document.createElement('div');
    newTask.className = 'noteblock';
    newTask.innerHTML = `<button type="submit" class="deleteNote_btn">X</button><p>${titleTask}</p>
    `;

    notesList.push(newTask)
    renderListNotes()

    divAddNote.appendChild(newTask);
    inputAddNotes.value = "";

    newTask.querySelector('.deleteNote_btn').addEventListener
    ('click', removeAddNote)

    // newTask.querySelector('.checkTask_btn').addEventListener
    // ('click', checkAddTask)
}

formNotes.addEventListener('submit', addNote)


const removeAddNote = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    notesList.splice(index, 1)
    renderListNotes();
}

const renderListNotes = () => {
    divAddNote.textContent = "";
    notesList.forEach((toDoElement, key) => {
     toDoElement.dataset.key = key;
     divAddNote.appendChild(toDoElement);
    })
   }
   formNotes.addEventListener('submit', addNote)

