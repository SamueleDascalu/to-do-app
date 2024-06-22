export function createTask(todo, checked = false){
  const tasksContainer = document.getElementById("tasks");

  let task = document.createElement("div");
  task.classList.add("task");
  
  if(checked === true){
    task.innerHTML = `
    <div class="task-container">
      <i class="fa-regular fa-circle-check"></i>
      <p class="task-paragraph-checked">${todo}</p>
      <span class="remove">&times;</span>
    </div>`;
  } else {
    task.innerHTML = `
    <div class="task-container">
      <i class="fa-regular fa-circle"></i>
      <p class="task-paragraph">${todo}</p>
      <span class="remove">&times;</span>
    </div>`;
  }

  tasksContainer.appendChild(task);
}