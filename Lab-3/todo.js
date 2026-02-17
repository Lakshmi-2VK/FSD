let taskList = document.getElementById('task-list');
let addButton = document.getElementById('add-btn');
let taskInput = document.getElementById('task-input');

addButton.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = `${taskText} <button class="remove-btn">X</button>`;
        taskList.appendChild(task);
        taskInput.value = '';

        let removeButton = task.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(task);
        });
    }
}
