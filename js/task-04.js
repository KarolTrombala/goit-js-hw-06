let counterValue = 0;

const counter = document.getElementById("counter");
const value = document.getElementById("value");
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

function updateDisplay() {
    value.textContent = counterValue;
  }

incrementBtn.addEventListener("click", () => {
  counterValue ++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  counterValue --;
  updateDisplay();
});
