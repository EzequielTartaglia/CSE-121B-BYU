let tasks = [];

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  tasks.forEach((task) => {
    listElement.innerHTML += `
    <li ${task.completed 
      ? 'class="strike"' 
      : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">🗑️</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
  });
}

function newTask() {
  const task = document.querySelector("#todo").value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
}

//Function to 🗑️
function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[1].innerText
  );
  taskElement.remove();
}

//Find the task by index, then change the class to strike or not (to ✅)
function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

//Functions to click in 🗑️ or ✅  →→ (Union of removeTask(taskElement) and completeTask(taskElement)) ←←
function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

//For each submit create a new task
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);