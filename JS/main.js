// for theme button
document.getElementById("theme-btn").addEventListener("click", function (){
  let body = document.getElementById("theme-bg");
  body.style.backgroundColor = `#${Math.floor(Math.random() * 0xFFFFFFFF).toString(16).padStart(8, '0').toUpperCase()}`
})