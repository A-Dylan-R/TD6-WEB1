const registerBtn = document.querySelector(".register");
const form = document.querySelector(".formulaire");
const submit = document.querySelector(".submit");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");

registerBtn.addEventListener("click", () => {
    registerBtn.remove();
    form.style.display = "block";
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    alert(`Welcome: ${firstName.value} ${lastName.value}`);
    form.reset(); 
    form.style.display = "none";
});
