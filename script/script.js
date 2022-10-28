
function validar(){
    let nombreCorrecto = true;
    let apellidoCorrecto = true;
    let mailCorrecto = false;

    let resultado = true;
    
    const nombre = document.getElementById("firstname").value;
    const apellido =  document.getElementById("lastname").value;
    const mail =    document.getElementById("mail").value;

    if(nombre.length > 2 ){
        nombreCorrecto = true;
    }

    if(apellido.length > 2 ){
        apellidoCorrecto = true;
    }
    
    if (mail.includes("@")){
        mailCorrecto = true
    }

    if ((nombreCorrecto === true) && (apellidoCorrecto === true) && (mailCorrecto === true)) {
        resultado = true
        return resultado
    
        
    } else {alert("EL FORMULARIO ESTA MAL CARGADO")
        resultado = false
        return resultado
    }

}
