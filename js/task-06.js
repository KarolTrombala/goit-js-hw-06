const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length == inputEl.dataset.length
    ? inputEl.setAttribute("class", "valid")
    : inputEl.setAttribute("class", "invalid");
});
