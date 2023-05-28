const controlEl = document.getElementById("controls");
const boxEl = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const inputEl = controlEl.firstElementChild;
let dimensions = 20;

// Color change
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Elements creation
const createBoxes = (amount) => {
  amount = +inputEl.value;

  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");

    createBox.setAttribute(
      "style",
      `background-color: ${getRandomHexColor()}; 
      width: ${(dimensions += 10)}px; 
      height: ${dimensions}px; margin-top: 10px`
    );

    boxEl.append(createBox);
  }
};
createBtn.addEventListener("click", createBoxes);

// Elements deletion
const destroyBoxes = () => (boxEl.innerHTML = "");
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  dimensions = 10;
});
