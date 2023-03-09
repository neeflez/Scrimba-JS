let value = document.getElementById("number");
let saved = document.getElementById("saved");
let x = 0;
let i = 0;
function add() {
  x += 1;
  value.innerText = x;
}

function save() {
  if (i == 0) {
    saved.innerText += x;
    x = 0;
    value.innerText = x;
    i++;
  } else {
    saved.innerText += " - " + x;
    x = 0;
    value.innerText = x;
    i++;
  }
  if (saved.innerText.length>29 && saved.innerText!=="") {
    saved.innerText = saved.innerText.slice(4);
  }
}
