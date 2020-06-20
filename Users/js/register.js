function register() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        //falls Fehler auftritt
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        error = true;
        alert("Bitte gib eine andere Email an!");
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Benutzer ist eingeloggt
            window.location.href = "home.html";
        } else {
            // No user is signed in.
        }
    });

}