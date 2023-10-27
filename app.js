const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validateForm() {
  var password = document.getElementsByClassName("password").value;
  var confirmPassword = document.getElementsByClassName("confirmpass").value;

  if (password === confirmPassword) {
 
      window.location.href = "thanks.html";
  } else {
      document.getElementById("error").innerHTML = "Passwords do not match.";
  }
}


