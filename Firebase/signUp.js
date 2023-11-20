const auth = firebase.auth();
//sign up using email and password
function signUp() {
  console.log('sign up called')
  let email=document.getElementById('emailInputElement').value
  let password=document.getElementById('passwordInputElement').value
  
  console.log(email, password)
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      console.log("User signed up:", userCredential);
      window.location.href = '../Registration Form/registration-form.html'
    })
    .catch(function (error) {
      console.error("Error signing up:", error);

    });
}