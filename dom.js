// DOM SELECTION
const title = document.getElementById("title");
const paragraphs = document.querySelectorAll(".text");

// CLICK EVENT
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  title.textContent = "Title Changed!";
  title.classList.toggle("active");
});

// INPUT EVENT
const nameInput = document.getElementById("nameInput");
const liveOutput = document.getElementById("liveOutput");

nameInput.addEventListener("input", () => {
  liveOutput.textContent = `Hello, ${nameInput.value}`;
});

// FORM SUBMIT
const form = document.getElementById("myForm");
const username = document.getElementById("username");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.trim() === "") {
    errorMsg.textContent = "Username is required!";
  } else {
    errorMsg.textContent = "";
    alert(`Submitted: ${username.value}`);
    username.value = "";
  }
});

// CREATE & REMOVE
const addItemBtn = document.getElementById("addItem");
const list = document.getElementById("list");

let count = 1;

addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${count++}`;

  li.addEventListener("click", () => {
    li.remove(); // click item to remove
  });

  list.appendChild(li);
});
