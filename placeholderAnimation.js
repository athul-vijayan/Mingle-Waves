
function somethingClicked(event) {
  let usernameField = document.getElementById("emailInputElement");
  let passwordField = document.getElementById("passwordInputElement");
  let usernameDisplay = document.getElementById("usernameDisplay");
  let passwordDisplay = document.getElementById("passwordDisplay");

  if (event.target === usernameField) {
    usernameDisplay.style.display='block'
    usernameDisplay.textContent = "User Name";
  } else {
    usernameDisplay.style.display='none'
  }
  if (event.target === passwordField) {
      passwordDisplay.style.display='block'
    passwordDisplay.textContent = "Password";
  } else {
      passwordDisplay.style.display='none'
  }
}
