const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", (e) => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
});
