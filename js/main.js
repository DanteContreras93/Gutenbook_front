

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
    return true
}//ValidarEmail

//valida que la entrada sea telefono
function validarNumber(){
    return (txtNumber.value.length >=10)
}//validarNombre

//valida longitud de cadena de mensaje
function validarMensaje(){
    return (txtMensaje.value.length >=20)
}//validarNombre






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

        if (! validarMensaje()) {
            txtNumber.style.border = "red thin solid";
            lista += "<li> Se debe escribir un menssaje válido (al menos veinte caracteres)</li>";
        }//validarMensaje

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







