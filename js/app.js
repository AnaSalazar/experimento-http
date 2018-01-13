var config = {
    apiKey: "AIzaSyDz5_ICujTt2hdrS7h-Q7Gj7vbe81yP4Ik",
    authDomain: "mi-primer-proyecto-af418.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-af418.firebaseio.com",
    projectId: "mi-primer-proyecto-af418",
    storageBucket: "mi-primer-proyecto-af418.appspot.com",
    messagingSenderId: "582757035827"
  };
firebase.initializeApp(config);

/*
En la lectura anterior ya tenemos nuestro archivo incializado con Firebase,
ahora vamos a subir nuestro proyecto a github y procedemos a trabajar con la
autenticación a través de Google.

AUTENTICACIÓN

0 Para poder usar la autenticacion de firebase es necesario que enlazemos al html
los otros cdn que necesitamos, mismos que vienen en la página https://firebase.google.com/docs/web/setup?authuser=0

1 Crear botón para disparar el evento

2 Me dirijo a mi proyecto, click en autenticación, click en SIGN-IN METHOD y habilitamos google.

3 Go to docs, Comienza a usar web, autenticacion, acceso con google, seguir instrucciones

4 En nuestro app.js vamos a crear una instancia del objeto del proveedor de Google:
var provider = new firebase.auth.GoogleAuthProvider();
y nos saltamos hasta el inciso 5 porque los anteriores puntos de la documentacion
son opcionales, ahi vemos que ya nos da unas lineas que debemos pegar en nuestro código
*/

// 5 Asi que nos vamos a nuestro archivo app.js y vamos a empezar por traernos el botón para asignarle un evento
$('#buttonGoogle').click(function () {
  authGoogle();
});

// 6 creamos nuestra función y ahí crearemos la instancia
function authGoogle(e) {
  var provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);
  authentication(provider);
}

// 7 Seguido de esto ya podemos pegar las lineas que firebase nos da, pero para
// no dejarlas "sueltas" en nuestro código las guardamos dentro de una función
// que se llamara desde la anterior
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

// 8 Si nosotros intentamos correr esto nos va a arrojar un error, así que lo
// siguiente que haremos es crear una rama gh-pages y correrlo ahí. Ahora nos muestra
// un error diferente realizamos los pasos que nos indica y Listo, ya funciona.

// BASE DE DATOS

// 1 Nos traemos el elemento sobre el que queremos probar nuestra base de datos
var $title = $('#title');

// 2 Creamos una referencia a la base de datos "var database = firebase.database().ref()""
// 3 Y le creamos una localización hija con un texto ".child('titulo');"
var database = firebase.database().ref().child('sopa');

// 4 Ya con esto podemos sincronizar cualquier cambio que se produzca en la base de
//datos mediante el uso de la función "on"
database.on('value', function(snapshot) {
  $title.text(snapshot.val());
});

// 5 Nos dirigimos a consola y en Reglas modificamos la seguridad,
// solo para poder hacer nuestras pruebas.

// 6 Volvemos a la base de datos y agregamos una identificador en Name
// le ponemos text y en Value escribimos lo que queremos que se guarde


// 7 ya podemos ver en nuestro navegador que funciona a la perfección
