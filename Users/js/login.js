function login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Benutzer ist eingeloggt
            window.location.href = "home.html";
        } else {
        }
    });
}