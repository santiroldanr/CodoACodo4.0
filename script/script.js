
function validar(){
    var todo_correcto = true;
      
    if(document.getElementById("firstname").value.length < 2 ){
        todo_correcto = false;
    }

    if(document.getElementById("lasttname").value.length < 2 ){
        todo_correcto = false;
    }
    
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var mail = document.form1.mail.value;
    if (!expresion.test(mail)){
        todo_correcto = false;
    }

    if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }
    
    return todo_correcto;
    }
    
