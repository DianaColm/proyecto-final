/*vista splash*/

$(document).ready(function() {
  setTimeout(function() {
    $(".preload").fadeOut(1500);
  }, 3000);

  setTimeout(function() {
      $("#main").fadeIn(1500)
  }, 3000);
});


//Initialize firebase
var config = {
    apiKey: "AIzaSyA-xZcS7WO-Pn1BIohD6jc98bmTUCk44VE",
    authDomain: "mi-primer-proyecto-68c57.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-68c57.firebaseio.com",
    projectId: "mi-primer-proyecto-68c57",
    storageBucket: "mi-primer-proyecto-68c57.appspot.com",
    messagingSenderId: "121489537713"
  };
  firebase.initializeApp(config);

$("#buttonGoogle").click(function (){
  authGoogle();
});

function authGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.location.href = "principal.html";
    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  });
}
