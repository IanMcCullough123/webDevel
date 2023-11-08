let sectionCount = 0;

function addSection() {
    sectionCount++;
    const sectionName = prompt('Enter section name:');
    if (sectionName === null) return;
    const sectionContainer = document.getElementById('sections-container');
    const newSection = document.createElement('div');
    newSection.className = 'section';
    newSection.innerHTML = `
        <h2>${sectionName}</h2>
        <ul id="section${sectionCount}"></ul>
        <input type="text" id="newTask${sectionCount}" placeholder="Add a task">
        <button class="addTask" onclick="addTask(${sectionCount})">Add Task</button>
        <br></br>
        <button class="remove-section" onclick="removeSection(this)">Remove Section</span>
    `;
    sectionContainer.appendChild(newSection);
}

function addTask(section) {
    const taskInput = document.getElementById(`newTask${section}`);
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById(`section${section}`);
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `
        <span>${taskText}</span>
        <button class="task-mod" onclick="completeTask(this)">Complete</button>
        <button class="task-mod" onclick="moveUp(this)">Move Up</button>
    `;
    taskList.appendChild(task);
    taskInput.value = '';
}

function completeTask(button) {
    const task = button.parentElement;
    task.remove();
}

function moveUp(button) {
    const task = button.parentElement;
    const section = task.parentElement;
    const tasks = section.querySelectorAll('.task');
    const currentIndex = Array.from(tasks).indexOf(task);
    if (currentIndex > 0) {
        section.insertBefore(task, tasks[currentIndex - 1]);
    }
}

function removeSection(button) {
    const section = button.parentElement;
    section.remove();
}