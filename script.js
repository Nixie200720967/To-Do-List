document.addEventListener('DOMContentLoaded', () => {
    const taskText = document.getElementById('task-text');
    const priority = document.getElementById('priority');
    const taskDate = document.getElementById('task-date');
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
        const dateValue = taskDate.value;
        if (taskValue === '' || dateValue === '') return;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${taskValue}</td>
            <td>${priority.value}</td>
            <td>${dateValue}</td>
            <td><input type="checkbox" class="check-task"></td>
            <td><button class="delete-task">Delete</button></td>
        `;

        toDoList.appendChild(tr);
        taskText.value = '';
        taskDate.value = '';

        tr.querySelector('.check-task').addEventListener('change', (e) => {
            if (e.target.checked) {
                tr.classList.add('completed');
                tr.querySelector('.check-task').remove();
                tr.querySelector('.delete-task').addEventListener('click', () => {
                    tr.remove();
                });
                doneList.appendChild(tr);
            }
        });

        tr.querySelector('.delete-task').addEventListener('click', () => {
            tr.remove();
        });
    };

    const deleteAllTasks = () => {
        toDoList.innerHTML = '';
        doneList.innerHTML = '';
    };

    addTaskButton.addEventListener('click', addTask);
    deleteAllButton.addEventListener('click', deleteAllTasks);
});
