/*Método para subir imágenes con lector de archivos */
var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

  /*Método jquery para publicar comentarios uno encima de otro sin que desaparezcan */
  $(document).ready(function () {
    $("#benviar").click(function () {
        $("#comments").prepend('<li>' + $("#comentario").val()+'</li>');
        $("#comentario").val('');
    });
});

/*Método para pintar de rojo el corazoncito cuando se da click */
var heart= document.getElementsByClassName('heart')
heart.addEventListener('click', function(){
    heart.classList.toggle('red');
})
