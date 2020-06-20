var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      document.getElementById("register_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

        var email_id = user.email;
        if (user.displayName != null) {
            var username = user.displayName;
            document.getElementById("user_para").innerHTML = "Willkommen : " + username;

        } else {
            document.getElementById("user_para").innerHTML = "Willkommen : " + email_id;
        }

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("register_div").style.display = "none";


  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Fehler : " + errorMessage);

  });

}

function register() {
    var userEmailRegister = document.getElementById("email_field_register").value;
    var userPassRegister = document.getElementById("password_field_register").value;

    firebase.auth().createUserWithEmailAndPassword(userEmailRegister, userPassRegister).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Fehler : " + errorMessage);
    });


    /*var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: usernameRegister,
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });*/


}

function logout(){
  firebase.auth().signOut();
}

function openRegister() {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = "block";
}

function openLogin() {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("register_div").style.display = "none";
}

function addUsername() {
    document.getElementById("newUsername").style.display = "block";
}

function saveUsername() {

    var user = firebase.auth().currentUser;
    var newUsername = document.getElementById("username_field").value;


    user.updateProfile({
        displayName: newUsername,
    }).then(function () {
        // Update successful.
        document.getElementById("newUsername").style.display = "none";

        var snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
            location.reload();
        }, 2100);
 
    
    }).catch(function (error) {
        // An error happened.

        document.getElementById("newUsername").style.display = "none";

        var snackbar = document.getElementById("snackbarErr");
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
            location.reload();
        }, 2100);
    });
}