//Prueba correo SMTP

let fname = document.getElementById('fname');
let fmail = document.getElementById('fmail');
let ftel = document.getElementById('ftel');
let fmensaje = document.getElementById('fmensaje');
let submit = document.getElementsByClassName('form-contact')[0];

//Boton a la escucha

submit.addEventListener('submit', (event)=>{
    event.preventDefault();

    console.log("Cliqueado");

//Envio de Mail

Email.send({
    SecureToken : "95fabcc2-f95c-4256-9a3a-f1530ef0a376",
    To : fmail.value,
    From : "vazquez2016601772@gmail.com",
    Subject : "Gracias por tu correo",
    Body : "En breve nos pondremos en contacto contigo. Muchas gracias.-El equipoo de gutuenbook"
}).then(
  message => alert(message)
);

Email.send({
    SecureToken : "95fabcc2-f95c-4256-9a3a-f1530ef0a376",
    To : "vazquez2016601772@gmail.com",
    From : "vazquez2016601772@gmail.com",
    Subject : "Nueva solicitud",
    Body : "Tenemos una nueva solicitud de contacto. Nombre: " + fname.value + " Correo: " + fmail.value + " Teléfono: " + ftel.value + " Mensaje: " + fmensaje.value
})
});