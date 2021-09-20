const input = document.querySelector(".newName");
const button = document.querySelector(".button");
const change = document.querySelector(".heading");
const add = document.querySelector(".done");

button.addEventListener("click", function () {
  // if (input.value == "" || input.value.match(/^ *$/) !== null) {
  //   change.innerHTML = "Hello, Akash";
  //   add.innerHTML = "❗ ❗ ❗ Input Name ❗ ❗ ❗";
  // } else {
  change.innerHTML = "Hello, " + input.value;
  add.innerHTML = "☑️Name Changed";
  // }
});
