


let txtNombre = document.getElementById("txtNombre");
let txtEmail =  document.getElementById("txtEmail");
let txtContrasena = document.getElementById("txtContrasena");
let txtContrasenaRep = document.getElementById("txtContrasenaRep");


//mensajes validación//

let messageNombre1 = document.getElementById("messageNombre1")
let messageNombre2 = document.getElementById("messageNombre2")
let messageEmail = document.getElementById("messageEmail")
let messageContrasena1 = document.getElementById("messageContrasena1")
let messageContrasena2 = document.getElementById("messageContrasena2")
let messageContrasena3 = document.getElementById("messageContrasena3")
let messageContrasena4 = document.getElementById("messageContrasena4")
let messageContrasena5 = document.getElementById("messageContrasena5")
let messageContrasenaRep = document.getElementById("messageContrasenaRep")

//mensajes validacion//

const submit = document.getElementsByClassName('form-contact')[0];


let idTimeout;

let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmit")

//Expresiones para validar//

let regexName = /^([a-zA-Z]{1})[\w]{2,}$/;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
let regexContrasena = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
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
    return ((txtContrasena.value === txtContrasenaRep.value) && ! (txtContrasena.value === "") && (validarContrasena()))
}//validarMensaje

function validarprimerCaracter(){
    return (! isNaN(txtNombre.value.charAt(0)))
}

//funciones para validar//





btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);


    if ((! validarNombre()) || (! validarEmail()) || (! validarContrasena()) || (! validarContrasenaRep())) {

        if (! validarNombre()){

            if (validarprimerCaracter()) {
                messageNombre1.style.display = "block"
                txtNombre.style.border = "#ff6961 medium solid"
            }

            if (txtNombre.value.length < 3) {
                messageNombre2.style.display = "block"
                txtNombre.style.border = "#ff6961 medium solid"
            }
  
        } else{
            messageNombre1.style.display = "none"
            txtNombre.style.border = "#77dd77 medium solid"
        }//validarNombre

        if (! validarEmail()){
            messageEmail.style.display = "block"
            txtEmail.style.border = "#ff6961 medium solid"
        } else{
            messageEmail.style.display = "none"
            txtEmail.style.border = "#77dd77 medium solid"
        }//validarEmail

        if (! validarContrasena()){

            let mensajes = 0;

            if (txtContrasena.value.length < 8 && mensajes <3) {
                messageContrasena1.style.display = "block"
                txtContrasena.style.border = "#ff6961 medium solid"
                mensajes++
            }

           if (! /\d/.test(txtContrasena.value) && mensajes <3) {
                messageContrasena2.style.display = "block"
                txtContrasena.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[A-Z]/.test(txtContrasena.value) && mensajes <3) {
                messageContrasena3.style.display = "block"
                txtContrasena.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[a-z]/.test(txtContrasena.value) && mensajes <3) {
                messageContrasena4.style.display = "block"
                txtContrasena.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[!@#$%^&*]/.test(txtContrasena.value) && mensajes <3) {
                messageContrasena5.style.display = "block"
                txtContrasena.style.border = "#ff6961 medium solid"
                mensajes++
            }

        } else{
            messageContrasena1.style.display = "none"
            messageContrasena2.style.display = "none"
            txtContrasena.style.border = "#77dd77 medium solid"
        }//validarContrasena

        if (! validarContrasenaRep()){
            messageContrasenaRep.style.display = "block"
            txtContrasenaRep.style.border = "#ff6961 medium solid"
        } else{
            messageContrasenaRep.style.display = "none"
            txtContrasenaRep.style.border = "#77dd77 medium solid"  
        }//ValidarContrasenaRep




        idTimeout = setTimeout(function(){
         
            messageNombre1.style.display = "none"
            messageNombre2.style.display = "none"
            txtNombre.style.border = ""
            messageEmail.style.display = "none"
            txtEmail.style.border = ""
            messageContrasena1.style.display = "none"
            messageContrasena2.style.display = "none"
            messageContrasena3.style.display = "none"
            messageContrasena4.style.display = "none"
            messageContrasena5.style.display = "none"
            txtContrasena.style.border = ""
            messageContrasenaRep.style.display = "none"
            txtContrasenaRep.style.border = ""
        }, 4000);

        return false;
    }//if ! validaciones

    txtNombre.style.border = "";
    messageNombre1.style.display = "none"
    messageNombre2.style.display = "none"
    txtEmail.style.border = "";
    messageEmail.style.display = "none"
    txtContrasena.style.border = "";
    messageContrasena1.style.display = "none"
    messageContrasena2.style.display = "none"
    messageContrasena3.style.display = "none"
    messageContrasena4.style.display = "none"
    messageContrasena5.style.display = "none"
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







