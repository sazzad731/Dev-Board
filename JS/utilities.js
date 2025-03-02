function getElementById(id) {
  let element = document.getElementById(id);
  return element;
}

function getInnerTextById(id){
  let innerText = document.getElementById(id).innerText;
  return innerText;
}

function createElement(tagName){
  const element = document.createElement(tagName);
  return element;
}