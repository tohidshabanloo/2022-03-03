const colors = ["red", "blue", "green", "yellow", "pink"];

const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
});