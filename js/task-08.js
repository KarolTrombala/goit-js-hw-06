const formEl = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola !!!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);
