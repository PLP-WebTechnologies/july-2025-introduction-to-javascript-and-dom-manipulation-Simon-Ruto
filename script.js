
// Part 1: Variables & Conditionals

let userName = "Simon";
let isMember = true;

if (isMember) {
  console.log(userName + " is a member!");
} else {
  console.log(userName + " is not a member");
}


// Part 2: Custom Functions

function changeGreeting() {
  document.getElementById("greeting").textContent = "Welcome back, " + userName + "!";
}

function randomBackgroundColor() {
  const colors = ["red", "green", "blue", "yellow", "pink"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}


// Part 3: Loops Examples

for (let i = 1; i <= 5; i++) {
  console.log("For loop number: " + i);
}

let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}


// Part 4: DOM Interactions

document.getElementById("changeTextBtn").addEventListener("click", changeGreeting);

document.getElementById("colorBtn").addEventListener("click", randomBackgroundColor);

document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "List item " + i;
    list.appendChild(li);
  }
});
