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


var botoncito = document.getElementById('btn');

botoncito.addEventListener('click', function(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	//crear checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	//creamos icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');
	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
	//evento que al hacer click le agrega color rojo al corazón
	heart.addEventListener('click', function(){
		heart.classList.toggle('red');
	})
	//evento que al hacer click remueve el div del comentario completo
	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})
	//evento que agrega tachado al párrafo al hacer click en el checkbox
	chck.addEventListener('click', function(){
		contenedorElemento.classList.toggle('strike-out'); //agrego clase tachado a parrafo contenedor de comentarios, se activa al hacer click, toggle es como un switch, agrega y quita sucesivamente
	})

})
