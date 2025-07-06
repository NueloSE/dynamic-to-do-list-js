document.addEventListener("DOMContentLoaded", () => {

    loadTasks();
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    if (!taskText) {
      alert("Enter a task!");
    }
    let task = document.createElement("li");
    task.textContent = taskText;
    let removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      task.remove();
      let storedTasks = JSON.parse(localStorage.getItem("tasks"));
      let taskIndex = storedTasks.indexOf(taskText);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    };

    task.appendChild(removeBtn);
    document.getElementById("task-list").appendChild(task);

    // update local storage
    if (save) {
      let storedTask = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTask.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTask));
      taskInput.value = "";
    }
  }

  function loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    storedTasks.forEach((task) => addTask(task, false));
  }

  addButton.addEventListener("click", () => addTask(taskInput.value.trim()));

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (taskInput.value) addTask(taskInput.value.trim());
    }
  });
});
