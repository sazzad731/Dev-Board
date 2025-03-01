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
