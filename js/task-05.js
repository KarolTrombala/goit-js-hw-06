const inputName = document.getElementById ("name-input");
const outputName = document.getElementById ("name-output");

inputName.addEventListener ("input", () => {
    outputName.textContent = inputName.value ? inputName.value: "Anonymous";
});

