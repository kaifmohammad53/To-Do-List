// const { createElement } = require("react");

let list=document.querySelector("#search");
let button=document.querySelector("#button");
let trash=document.querySelector("#trash");
let count=0;

const addTask = () => {
  count++;
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
    <p>${count}</p>
    <p>${list.value}</p>
    <select name="status" id="status">
        <option value="Done">Done</option>
        <option value="pending">Pending</option>
    </select>
    <i id="trash" class="fa-solid fa-trash trash"></i>`;
  document.querySelector(".task-container").append(newTask);
};
button.addEventListener("click",addTask);
document.querySelector(".task-container").addEventListener("click",(e)=>{
    if(e.target.classList.contains("trash")){
        e.target.parentElement.remove();
    }
});