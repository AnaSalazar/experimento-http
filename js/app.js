var config = {
    apiKey: "AIzaSyDz5_ICujTt2hdrS7h-Q7Gj7vbe81yP4Ik",
    authDomain: "mi-primer-proyecto-af418.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-af418.firebaseio.com",
    projectId: "mi-primer-proyecto-af418",
    storageBucket: "mi-primer-proyecto-af418.appspot.com",
    messagingSenderId: "582757035827"
  };
firebase.initializeApp(config);

$('#buttonGoogle').click(function (){
  authGoogle();
})

function authGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(result);
    })
    .catch(function(error) {
      console.log(error);
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      console.log(email);
      var credential = error.credential;
      console.log(credential);
    });  
}
