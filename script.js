document.addEventListener('DOMContentLoaded', () =>{

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    let tasks = localStorage.getItem('tasks')

    if (tasks) {
        tasks = JSON.parse(tasks);
        for (let i = 0; i < tasks.length; i++) {
            let li = document.createElement('li');
            li.textContent = taskArray[i];
            document.getElementById('task-list').appendChild(li);
        }

    }
    


    function addTask() {
        let taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Enter a task!');
        }
        let task = document.createElement('li');
        task.textContent = taskText; 
        let removeBtn = document.createElement('button');

        removeBtn.textContent = 'Remove'
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function() {
            task.remove();
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            for (let i = 0; i < tasks.length; i++){
                if (tasks[i] === task){
                    tasks.splice(i, 1);
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }

        task.appendChild(removeBtn);
        document.getElementById('task-list').appendChild(task)

        // update local storage
        let taskArray = (JSON.parse(localStorage.getItem('tasks'))) || [];
        taskArray.push(taskInput.value)
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            if (taskInput.value) addTask();      
        }
    })
})