const auth = firebase.auth();

        // Function to handle anonymous sign-in
        function signInAnonymously() {
            auth.signInAnonymously()
                .then((userCredential) => {
                    // User signed in anonymously
                    const user = userCredential.user;
                    document.getElementById('message').textContent = `Signed in anonymously. User UID: ${user.uid}`;
                    window.location.href="../Registration Form/registration-form.html"
                })
                .catch((error) => {
                    // Handle sign-in errors
                    document.getElementById('message').textContent = `Sign-in error: ${error.message}`;
                });
        }

        