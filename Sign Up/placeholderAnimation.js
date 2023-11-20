
      function somethingClicked(event) {
        let emailField = document.getElementById("emailInputElement");
        let passwordField = document.getElementById("passwordInputElement");
        let emailDisplay = document.getElementById("emailDisplay");
        let passwordDisplay = document.getElementById("passwordDisplay");

        if (event.target === emailField) {
          emailDisplay.style.display='block'
          emailDisplay.textContent = "Email Address";
        } else {
          emailDisplay.style.display='none'
        }
        if (event.target === passwordField) {
            passwordDisplay.style.display='block'
          passwordDisplay.textContent = "Password";
        } else {
            passwordDisplay.style.display='none'
        }
      }
