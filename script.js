const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('sign up', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.Value.trim();
  const emailValue = email.Value.trim();
  const passwordValue = password.Value.trim();
  const password2Value = password2.Value.trim();

  if ((usernameValue = "")) {
    setErrorFor(username, "Input username");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, " Input Email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, " Input Password");
  } else {
    setSuccessFor(password);
  }

  // if (passwordValue.length < 6) {
  //   alert("Password should be atleast 6 character long");
  //   password.focus();
  //   return false;
  // }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm Password Here");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
