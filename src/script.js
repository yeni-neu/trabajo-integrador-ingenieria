const btn = document.getElementById("changeColorBtn");
const colorDisplay = document.getElementById("colorCode");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex}`;
}

btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
});