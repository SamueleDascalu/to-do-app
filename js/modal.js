import {createTask} from "./createTask.js";
import {tasksObject} from "./persistence.js";

const addButton = document.getElementById("add-button");
const closeButton = document.getElementById("close-modal");
const form = document.getElementById("form");
const dialog = document.getElementById("dialog");
let inp = document.getElementById("new-task");

//start modal

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault;

  let value = inp.value;

  createTask(value);

  tasksObject[value] = false;

  localStorage.setItem("tasks", JSON.stringify(tasksObject));

  form.reset();
});

//end modal