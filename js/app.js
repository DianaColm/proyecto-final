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
      console.log(result);
    })
  .catch(function(error) {
    console.log(error);
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
});
}

