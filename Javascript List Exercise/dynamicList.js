document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addElem');
    const clearButton = document.getElementById('clearList');
    const inputText = document.getElementById('textInput');
    const todoList = document.getElementById('todo-list');
    
    addButton.addEventListener('click', function () {
        const text = inputText.value;
        if (text.trim() !== '') {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(text));
            todoList.appendChild(listItem);
            inputText.value = '';d
        }
    });
    
    clearButton.addEventListener('click', function () {
        todoList.innerHTML = '';
    });

    todoList.addEventListener('change', function (e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            const listItem = e.target.parentElement;
            if (e.target.checked) {
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        }
    });
});