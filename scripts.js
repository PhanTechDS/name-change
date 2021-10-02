const input = document.querySelector(".newName");
const button = document.querySelector(".button");
const change = document.querySelector(".heading");
const add = document.querySelector(".done");

button.addEventListener("click", function () {
  change.innerHTML = "Hello," + input.value;
  add.innerHTML = "Name changed";
});
