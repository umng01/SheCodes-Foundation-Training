//Challenge 1
let specialButton = document.querySelector("#special-button");
specialButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Hooray!");
});

//Challenge 2

let password = document.querySelector("#password-form");
password.addEventListener("submit", function (event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`🙀 Your super secret password is ${passwordInput.value}`);
});
// Challenge 3

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#username-input");
  alert(`Your email is ${emailInput.value}`);
  alert(`Your username is ${usernameInput.value}`);
});
