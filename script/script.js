
function validar(){
    var correcto = true;
      
    if(document.getElementById("firstname").value.length < 2 ){
        correcto = false;
    }

    if(document.getElementById("lasttname").value.length < 2 ){
        correcto = false;
    }
    
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var mail = document.form1.mail.value;
    if (!expresion.test(mail)){
        correcto = false;
    }

    if(!correcto){
    alert("los capmpos no estan completos, reviselos");
    }
    
    return correcto;
    }
    
