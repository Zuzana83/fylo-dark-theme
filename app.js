const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const accessForm = document.getElementById("access-form");
const emailInput = document.getElementById("email");

accessForm.email.addEventListener("keyup", (e) => {
  if(emailPattern.test(e.target.value)) {
   e.target.parentElement.nextElementSibling.className = "error"
  } else {
    e.target.parentElement.nextElementSibling.className = "error show"
  }
});

accessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(!emailInput.value) {
    emailInput.parentElement.nextElementSibling.className = "error show";
    return;
  } else {
    emailInput.parentElement.nextElementSibling.className = "error";
  }
  console.log(emailInput.value);
  emailInput.value = "";
});