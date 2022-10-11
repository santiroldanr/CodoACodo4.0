function valida_envia(){
    if (document.formulario.firstname.value.length==0){
           alert("Tiene que escribir su nombre")
           document.formulario.firstname.focus()
           return 0;
    }
 
   
    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();