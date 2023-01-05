


let txtNombre = document.getElementById("txtNombre");
let txtEmail =  document.getElementById("txtEmail");
let txtContrasena = document.getElementById("txtContrasena");
let txtContrasenaRep = document.getElementById("txtContrasenaRep");


//mensajes validación//

let messageNombre = document.getElementById("messageNombre")
let messageEmail = document.getElementById("messageEmail")
let messageContrasena = document.getElementById("messageContrasena")
let messageContrasenaRep = document.getElementById("messageContrasenaRep")

//mensajes validacion//

const submit = document.getElementsByClassName('form-contact')[0];


let idTimeout;

let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmit")

//Expresiones para validar//

let regexName = /^([a-zA-Z]{1})[\w]{2,}$/;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
//Expresiones para validar//


//funciones para validar//

function validarNombre(){
    return (regexName.test(txtNombre.value))
}//validarNombre

//valida que la entrada sea email
function validarEmail(){
    return (regexEmail.test(txtEmail.value))
}//ValidarEmail

//valida que la entrada sea telefono
function validarContrasena(){
    return (regexContrasena.test(txtContrasena.value))
}//validarNumber

//valida longitud de cadena de mensaje
function validarContrasenaRep(){
    return ((txtContrasena.value === txtContrasenaRep.value) && ! (txtContrasena.value === ""))
}//validarMensaje

//funciones para validar//





btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);

    if ((! validarNombre()) || (! validarEmail()) || (! validarContrasena()) || (! validarContrasenaRep())) {

        if (! validarNombre()){
            messageNombre.style.display = "block"
            txtNombre.style.border = "red thin solid"
        } //validarNombre

        if (! validarEmail()){
            messageEmail.style.display = "block"
            txtEmail.style.border = "red thin solid"
        }//validarEmail

        if (! validarContrasena()){
            messageContrasena.style.display = "block"
            txtContrasena.style.border = "red thin solid"
        }//validarContrasena

        if (! validarContrasenaRep()){
            messageContrasenaRep.style.display = "block"
            txtContrasenaRep.style.border = "red thin solid"
        }//ValidarContrasenaRep




        idTimeout = setTimeout(function(){
         
            messageNombre.style.display = "none"
            messageEmail.style.display = "none"
            messageContrasena.style.display = "none"
            messageContrasenaRep.style.display = "none"
        }, 4000);

        return false;
    }//if ! validaciones

    txtNombre.style.border = "";
    messageNombre.style.display = "none"
    txtEmail.style.border = "";
    messageEmail.style.display = "none"
    txtContrasena.style.border = "";
    messageContrasena.style.display = "none"
    txtContrasenaRep.style.border = "";
    messageContrasenaRep.style.display = "none"

    
    txtNombre.focus();
    console.log(txtNombre.value);

    //e.preventDefault();
    console.log("Click");

    //para que se escriban las instrucciones html
    let ebody= `
                <b>Nombre: </b>${txtNombre.value}<br>
                <b>email: </b>${txtEmail.value}<br>
                <b>telefono: </b>${txtContrasena.value}<br>
                <b>mensaje: </b>${txtContrasenaRep.value}<br>
                `

    Email.send({
        SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
        To : txtEmail.value,
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
        Subject : "Test email"+ txtEmail.value,
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

txtEmail.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtContrasena.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

txtContrasenaRep.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumber.value = txtNumber.value.trim();
    event.target.value = event.target.value.trim();
});

//evento BLUR







