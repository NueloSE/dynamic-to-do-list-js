'use strict'
let userInput = document.getElementById('input');
const addBtn = document.getElementById('add');

function addTask() {
    let task = userInput.value.trim();

    if (!task) {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement('li');
    li.textContent = task;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove'
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function() {
        li.remove();
    }

    li.appendChild(removeBtn);

    document.getElementById('taskList').appendChild(li)

    userInput.value= '';
}

addBtn.onclick = function() {
    addTask();
}

