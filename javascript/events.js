// Event Handling Example (Browser code)
const input = document.createElement("input");
input.placeholder = "Type something...";
document.body.appendChild(input);

input.addEventListener("keyup", (e) => {
  console.log("You typed:", e.target.value);
});
