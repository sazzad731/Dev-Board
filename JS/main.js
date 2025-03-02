// for theme button
document.getElementById("theme-btn").addEventListener("click", function (){
  let body = document.getElementById("theme-bg");
  body.style.backgroundColor = `#${Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, '0').toUpperCase()}`
})


// for date
let date = new Date().toDateString().split(" ");
let getWeek = date.shift(0);
document.getElementById("week").innerText = getWeek;
let day = date.join(" ");
document.getElementById("day").innerText = day



// for task complete button
let assignedTask = parseInt(getInnerTextById("AssignedTaskQuantity"));
let completedTask = parseInt(getInnerTextById("completedTaskQuantity"));
let historyContentBox = getElementById("history-content");
getElementById("allTask").addEventListener("click", function(event){
  if (event.target.innerText.toLowerCase() === "completed") {
    alert("Board updated successfully");
    if(assignedTask === 1){
      alert("Congrates!!! You have completed all the current task");
    }
    event.target.setAttribute("disabled", "true")
    event.target.style.backgroundColor = "#91a0ff";
    event.target.classList.remove("cursor-pointer");
    event.target.classList.add("cursor-not-allowed");
    assignedTask--;
    getElementById("AssignedTaskQuantity").innerText = "0" + assignedTask;
    completedTask++;
    getElementById("completedTaskQuantity").innerText = completedTask;
    
    let taskTitle = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    let pTag = createElement("p");
    pTag.classList.add("bg-[#eef2fc]", "p-3", "rounded-lg", "text-gray-600", "mb-5");
    pTag.innerText = `You have completed the task ${taskTitle} at ${new Date().toLocaleTimeString()}`;
    historyContentBox.appendChild(pTag);
  }
});



// for history button
getElementById("clearHistory").addEventListener("click", function(){
  historyContentBox.innerHTML = "";
})