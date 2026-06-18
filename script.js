// const { createElement } = require("react");

let list=document.querySelector("#search");
let button=document.querySelector("#button");
// let trash=document.querySelector("#trash");
// let status=document.querySelector("#status");

function saveTask(){
    localStorage.setItem(
        "tasks",
        document.querySelector(".task-container").innerHTML
    );
}
const addTask = () => {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  const serial = document.querySelectorAll(".task").length + 1;
  if(list.value.trim()===""){
    alert("Kuch likh to bhadwe!");
    return;
  }
  newTask.innerHTML = `
  <p>${serial}</p>
  <p>${list.value}</p>
  <select name="status" class="status">
      <option value="pending">Pending</option>
      <option value="Done">Done</option>
  </select>
  <i class="fa-solid fa-trash trash"></i>`;
  document.querySelector(".task-container").append(newTask);
  saveTask();
  list.value = "";
};
button.addEventListener("click",addTask);
list.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

document.querySelector(".task-container").addEventListener("click",(e)=>{
    if(e.target.classList.contains("trash")){
        e.target.parentElement.remove();
        saveTask();
    }
});
document.querySelector(".task-container").addEventListener("change", (e) => {
  if (e.target.value == "Done") {
    e.target.style.backgroundColor = "green";
  }
  else{
    e.target.style.backgroundColor="red";
  }
  saveTask();

});
function loadTask() {
  const savedTask = localStorage.getItem("tasks");

  if (savedTask) {
    document.querySelector(".task-container").innerHTML = savedTask;

    document.querySelectorAll(".status").forEach((select) => {
      if (select.value === "Done") {
        select.style.backgroundColor = "green";
      } else {
        select.style.backgroundColor = "red";
      }
    });
  }
}
loadTask();