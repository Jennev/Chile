$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


var correo = $("#enviarCorreo")

$(correo).submit(function(enviado){
    console.log ("hola mundo")
    alert ('¡Gracias!. \n Su mensaje ha sido enviado de manera exitosa')    
})

