document.addEventListener('DOMContentLoaded', () => {
    const taskText = document.getElementById('task-text');
    const priority = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task');
    const toDoList = document.getElementById('to-do-list');
    const doneList = document.getElementById('done-list');
    const deleteAllButton = document.getElementById('delete-all');
    const currentTime = document.getElementById('current-time');

    const updateTime = () => {
        const now = new Date();
        currentTime.textContent = now.toDateString() + ' ' + now.toLocaleTimeString();
    };

    setInterval(updateTime, 1000);
    updateTime();

    const addTask = () => {
        const taskValue = taskText.value.trim();
        if (taskValue === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue} - <em>${priority.value}</em></span>
            <input type="checkbox" class="check-task">
        `;

        toDoList.appendChild(li);
        taskText.value = '';

        li.querySelector('.check-task').addEventListener('change', (e) => {
            if (e.target.checked) {
                li.classList.add('completed');
                doneList.appendChild(li);
            } else {
                li.classList.remove('completed');
                toDoList.appendChild(li);
            }
        });
    };

    const deleteAllTasks = () => {
        toDoList.innerHTML = '';
        doneList.innerHTML = '';
    };

    addTaskButton.addEventListener('click', addTask);
    deleteAllButton.addEventListener('click', deleteAllTasks);
});
