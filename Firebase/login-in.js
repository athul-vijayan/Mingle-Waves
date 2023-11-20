var auth = firebase.auth();

function logInToMinglewaves() {
    auth
      .signInWithEmailAndPassword('ajasim@jasim.com', 'password')
      .then(function (userCredential) {
        console.log("User signed in:", userCredential);
      })
      .catch(function (error) {
        console.error("Error signing in:", error);
      });
  }