<<<<<<< HEAD
=======


>>>>>>> 04c1d8e84ae5544fa2060c17945c10e07e4f4de4
let txtNombre = document.getElementById("txtNombre");
let txtemail =  document.getElementById("txtemail");
let txtNumber = document.getElementById("txtNumber");
let txtMensaje = document.getElementById("txtMensaje");

const submit = document.getElementsByClassName('form-contact')[0];

let alertValidaciones= document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let idTimeout;

let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmit")

//valida longitud de cadena de nombre
function validarNombre(){
    return (txtNombre.value.length >2)
}//validarNombre

//valida que la entrada sea email
function validarEmail(){
<<<<<<< HEAD
    return true 
=======
    return true
>>>>>>> 04c1d8e84ae5544fa2060c17945c10e07e4f4de4
}//ValidarEmail

//valida que la entrada sea telefono
function validarNumber(){
    return (txtNumber.value.length >=10)
}//validarNombre

//valida longitud de cadena de mensaje
function validarMensaje(){
    return (txtMensaje.value.length >=20)
}//validarNombre

<<<<<<< HEAD
=======





>>>>>>> 04c1d8e84ae5544fa2060c17945c10e07e4f4de4
btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);
    

    alertValidacionesTexto.innerHTML = "";

    if ((! validarNombre()) || (! validarMensaje())) {
        let lista = "<ul>";
        if (! validarNombre()) {
            txtNombre.style.border = "red thin solid";
            lista += "<li> Se debe escribir un nombre válido (al menos tres caracteres)</li>";
        }//validarNombre

<<<<<<< HEAD
        if (! validarEmail()) {
            txtemail.style.border = "red thin solid";
            lista += "<li> Se debe escribir correo electrónico valido</li>";
        }//validaremail

        if (! validarNumber()) {
            txtNumber.style.border = "red thin solid";
            lista += "<li> Se debe escribir un numero telefónico valido</li>";
        }//validaremail

        if (! validarMensaje()) {
            txtMensaje.style.border = "red thin solid";
            lista += "<li> Se debe escribir un mensaje válido (al menos veinte caracteres)</li>";
        }//validarMensaje

        

=======
        if (! validarMensaje()) {
            txtNumber.style.border = "red thin solid";
            lista += "<li> Se debe escribir un menssaje válido (al menos veinte caracteres)</li>";
        }//validarMensaje

>>>>>>> 04c1d8e84ae5544fa2060c17945c10e07e4f4de4
        lista += "</ul>";

        alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
        
        alertValidaciones.style.display = "block";

        idTimeout = setTimeout(function(){
            alertValidaciones.style.display = "none";
        }, 5000);

        return false;
    }//if ! validaciones

    txtNombre.style.border = "";
    txtNumber.style.border = "";
    alertValidaciones.style.display = "none";
    
    txtNombre.focus();


    //e.preventDefault();
    console.log("Click");

    //para que se escriban las instrucciones html
    let ebody= `
                <b>Nombre: </b>${txtNombre.value}<br>
                <b>email: </b>${txtemail.value}<br>
                <b>telefono: </b>${txtNumber.value}<br>
                <b>mensaje: </b>${txtMensaje.value}<br>
                `

    Email.send({
        SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
        To : txtemail.value,
        From : "tortillajuden@gmail.com",
        Subject : "Gracias por contactarnos con nosotros en un plazo maximo de 2 dias nos pondremos en contacto contigo"+txtemail.value,
        Body : "Por contactarnos de esta forma recibe un codigo de descuento en tu proxima compra. CODE= ASDASFSDHFS41526265"
    }).then(
      message => alert(message)
    );

    //codigo para enviar email
    Email.send({
        SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
        To : 'tortillajuden@gmail.com',
        From : "tortillajuden@gmail.com",
        Subject : "Test email"+ txtemail.value,
        Body : ebody
    }).then(
      message => alert(message)
    );

});


//evento BLUR
txtNombre.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNombre.value = txtNombre.value.trim();
    event.target.value = event.target.value.trim();
});

txtemail.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtNumber.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtMensaje.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

//evento BLUR







