let signInBtn = document.querySelector("#sign-in-btn");
let signUpBtn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");

signUpBtn.addEventListener('click', () => {
    
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});




// let txtNombreIn = document.getElementById("txtNombreIn");
// let txtContrasenaIn = document.getElementById("txtContrasenaIn");

let txtNombreUp = document.getElementById("txtNombreUp");
let txtContrasenaUp = document.getElementById("txtContrasenaUp");
let txtTelUp =  document.getElementById("txtTelUp");
let txtEmailUp =  document.getElementById("txtEmailUp");


//mensajes validación//

let messageNombreUp1 = document.getElementById("messageNombreUp1")
let messageNombreUp2 = document.getElementById("messageNombreUp2")
let messageTelUp = document.getElementById("messageTelUp")
let messageEmailUp = document.getElementById("messageEmailUp")
let messageContrasenaUp1 = document.getElementById("messageContrasenaUp1")
let messageContrasenaUp2 = document.getElementById("messageContrasenaUp2")
let messageContrasenaUp3 = document.getElementById("messageContrasenaUp3")
let messageContrasenaUp4 = document.getElementById("messageContrasenaUp4")
let messageContrasenaUp5 = document.getElementById("messageContrasenaUp5")

//mensajes validacion//

//Bordes alertas//

let NombreBorder =  document.getElementById("NombreBorder");
let EmailBorder =  document.getElementById("EmailBorder");
let TelBorder =  document.getElementById("TelBorder");
let ContrasenaBorder =  document.getElementById("ContrasenaBorder");

//Bordes alertas//

// const submit = document.getElementsByClassName('form-contact')[0];


let idTimeout;

// let datos = []; // new Array();

let btnsubmit = document.getElementById("btnsubmit")

//Expresiones para validar//

let regexName = /^([a-zA-Z]{1})[\w]{2,}$/;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
let regexTel = /^\d{10}$/
let regexContrasena = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
//Expresiones para validar//


//funciones para validar//

function validarNombre(){
    return (regexName.test(txtNombreUp.value))
}//validarNombre

function validarEmail(){
    return (regexEmail.test(txtEmailUp.value))
}//validarEmail

function validarTel(){
    return (regexTel.test(txtTelUp.value))
}//validarTel

function validarContrasena(){
    return (regexContrasena.test(txtContrasenaUp.value))
}//validarNumber

function validarprimerCaracter(){
    return (! isNaN(txtNombreUp.value.charAt(0)))
}

//funciones para validar//


btnsubmit.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);


    if ((! validarNombre()) || (! validarEmail()) || (! validarTel()) || (! validarContrasena())) {

        btnsubmit.style.background = "#ff6961"
        if (! validarNombre()){

            if (validarprimerCaracter()) {
                messageNombreUp1.style.display = "block"
                NombreBorder.style.border = "#ff6961 medium solid"
            }

            if (txtNombreUp.value.length < 3) {
                messageNombreUp2.style.display = "block"
                NombreBorder.style.border = "#ff6961 medium solid"
            }
  
        } else{
            messageNombreUp1.style.display = "none"
            messageNombreUp2.style.display = "none"
            NombreBorder.style.border = "#77dd77 medium solid"
        }//validarNombre

        if (! validarEmail()){
            messageEmailUp.style.display = "block"
            EmailBorder.style.border = "#ff6961 medium solid"
        } else{
            messageEmailUp.style.display = "none"
            EmailBorder.style.border = "#77dd77 medium solid"
        }//validarEmail

        if (! validarTel()){
            messageTelUp.style.display = "block"
            TelBorder.style.border = "#ff6961 medium solid"
        } else{
            messageTelUp.style.display = "none"
            TelBorder.style.border = "#77dd77 medium solid"
        }//validarTel

        if (! validarContrasena()){

            let mensajes = 0;

            if ((txtContrasenaUp.value.length < 8 || txtContrasenaUp.value.length > 20) && mensajes <3 ) {
                messageContrasenaUp1.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            }

           if (! /\d/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp2.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[A-Z]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp3.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[a-z]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp4.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            }

            if (! /[!@#$%^&*]/.test(txtContrasenaUp.value) && mensajes <3) {
                messageContrasenaUp5.style.display = "block"
                ContrasenaBorder.style.border = "#ff6961 medium solid"
                mensajes++
            }

        } else{
            messageContrasenaUp1.style.display = "none"
            messageContrasenaUp2.style.display = "none"
            messageContrasenaUp3.style.display = "none"
            messageContrasenaUp4.style.display = "none"
            messageContrasenaUp5.style.display = "none"
            ContrasenaBorder.style.border = "#77dd77 medium solid"
        }//validarContrasena



        idTimeout = setTimeout(function(){
         
            messageNombreUp1.style.display = "none"
            messageNombreUp2.style.display = "none"
            NombreBorder.style.border = ""
            messageEmailUp.style.display = "none"
            EmailBorder.style.border = ""
            messageTelUp.style.display = "none"
            TelBorder.style.border = ""
            messageContrasenaUp1.style.display = "none"
            messageContrasenaUp2.style.display = "none"
            messageContrasenaUp3.style.display = "none"
            messageContrasenaUp4.style.display = "none"
            messageContrasenaUp5.style.display = "none"
            ContrasenaBorder.style.border = ""
            btnsubmit.style.background = "#84b6f4"
        }, 4000);

        return false;
    }//if ! validaciones

    NombreBorder.style.border = "";
    messageNombreUp1.style.display = "none"
    messageNombreUp2.style.display = "none"
    EmailBorder.style.border = "";
    messageEmailUp.style.display = "none"
    TelBorder.style.border = "";
    messageTelUp.style.display = "none"
    ContrasenaBorder.style.border = "";
    messageContrasenaUp1.style.display = "none"
    messageContrasenaUp2.style.display = "none"
    messageContrasenaUp3.style.display = "none"
    messageContrasenaUp4.style.display = "none"
    messageContrasenaUp5.style.display = "none"


    
    txtNombreUp.focus();

});

//     console.log(txtNombreUp.value);

//     //e.preventDefault();
//     console.log("Click");

//     //para que se escriban las instrucciones html
//     let ebody= `
//                 <b>Nombre: </b>${txtNombre.value}<br>
//                 <b>email: </b>${txtEmail.value}<br>
//                 <b>telefono: </b>${txtContrasena.value}<br>
//                 <b>mensaje: </b>${txtContrasenaRep.value}<br>
//                 `

//     Email.send({
//         SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
//         To : txtEmail.value,
//         From : "tortillajuden@gmail.com",
//         Subject : "Gracias por contactarnos con nosotros en un plazo maximo de 2 dias nos pondremos en contacto contigo"+txtemail.value,
//         Body : "Por contactarnos de esta forma recibe un codigo de descuento en tu proxima compra. CODE= ASDASFSDHFS41526265"
//     }).then(
//       message => alert(message)
//     );

//     //codigo para enviar email
//     Email.send({
//         SecureToken : "6403fd97-7ca2-4041-ac0b-f09a5814bf5c",
//         To : 'tortillajuden@gmail.com',
//         From : "tortillajuden@gmail.com",
//         Subject : "Test email"+ txtEmail.value,
//         Body : ebody
//     }).then(
//       message => alert(message)
//     );

// });


// //evento BLUR
txtNombreUp.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNombreUp.value = txtNombreUp.value.trim();
    event.target.value = event.target.value.trim();
});

txtEmailUp.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumberUp.value = txtNumberUp.value.trim();
    event.target.value = event.target.value.trim();
});

txtContrasenaUp.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumberUp.value = txtNumberUp.value.trim();
    event.target.value = event.target.value.trim();
});

txtTelUp.addEventListener("blur", function (event){
    event.preventDefault();
    // txtNumberUp.value = txtNumberUp.value.trim();
    event.target.value = event.target.value.trim();
});

// txtContrasenaRep.addEventListener("blur", function (event){
//     event.preventDefault();
//     // txtNumber.value = txtNumber.value.trim();
//     event.target.value = event.target.value.trim();
// });

// //evento BLUR







