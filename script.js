// const { createElement } = require("react");

let list=document.querySelector("#search");
let button=document.querySelector("#button");
let trash=document.querySelector("#trash");
let status=document.querySelector("#status");

const addTask = () => {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  const serial = document.querySelectorAll(".task").length + 1;
  newTask.innerHTML = `
    <p>${serial}</p>
    <p>${list.value}</p>
    <select name="status" id="status">
        <option value="pending">Pending</option>
        <option value="Done">Done</option>
    </select>
    <i id="trash" class="fa-solid fa-trash trash"></i>`;
  document.querySelector(".task-container").append(newTask);
  list.value="";
};
button.addEventListener("click",addTask);
document.querySelector(".task-container").addEventListener("click",(e)=>{
    if(e.target.classList.contains("trash")){
        e.target.parentElement.remove();
    }
});
document.querySelector(".task-container").addEventListener("change", (e) => {
  if (e.target.value == "Done") {
    e.target.style.backgroundColor = "green";
  }
  else{
    e.target.style.backgroundColor="red";
  }
});