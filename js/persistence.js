import { createTask } from "./createTask.js";

// used in modal at rows 27 and 29
// used in tasksLogic at rows 11,12 - 16,17 - 21,22
export let tasksObject = {};

window.addEventListener("load", () => {

  if(localStorage.getItem("tasks") !== null) {
    tasksObject = JSON.parse(localStorage.getItem("tasks"))
    
    for(let task in tasksObject){
      createTask(task, tasksObject[task])
    }
  }
});