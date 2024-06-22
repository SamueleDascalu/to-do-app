import { tasksObject } from "./persistence.js";

const tasks = document.getElementById("tasks");

tasks.addEventListener("click", event => {

  if(event.target.nodeName === "I") {
    if(event.target.className === "fa-regular fa-circle"){
      event.target.className = "fa-regular fa-circle-check";
      event.target.nextSibling.nextSibling.className = "task-paragraph-checked";
      tasksObject[event.target.nextSibling.nextSibling.innerText] = true;
      localStorage.setItem("tasks", JSON.stringify(tasksObject));
    } else {
      event.target.className = "fa-regular fa-circle";
      event.target.nextSibling.nextSibling.className = "task-paragraph";
      tasksObject[event.target.nextSibling.nextSibling.innerText] = false;
      localStorage.setItem("tasks", JSON.stringify(tasksObject));
    }
  } else if(event.target.nodeName === "SPAN"){
    event.target.parentElement.remove();
    delete tasksObject[event.target.previousSibling.previousSibling.innerText]
    localStorage.setItem("tasks", JSON.stringify(tasksObject));
  }
});