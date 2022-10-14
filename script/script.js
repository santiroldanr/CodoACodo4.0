
function validar(){
    let nombreCorrecto = true;
    let apellidoCorrecto = true;
    let mailCorrecto = false;

    let resultado = true;
    
    const nombre = document.getElementById("firstname");
    const apellido =  document.getElementById("lastname");
    const mail =    document.getElementById("mail");

    if(nombre.length < 2 ){
        nombreCorrecto = false;
    }

    if(apellido.length < 2 ){
        apellidoCorrecto = false;
    }
    
    if ("@" in mail){
        mailCorrecto = true
    }


    if ((nombreCorrecto === true) && (apellidoCorrecto=== true) && (mailCorrecto=== true)) {
        resultado = true
        return resultado
    } else if((nombreCorrecto === false) || (apellidoCorrecto=== false) || (mailCorrecto=== false)) {
        alert("EL FORMULARIO ESTA MAL CARGADO")
    } else {
        resultado = false
        return resultado
    }

}
