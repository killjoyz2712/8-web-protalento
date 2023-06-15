function mandaDatos(){
    let username = "AdrianGC";
    let contra = "juanito1234";
    let div_mensaje = document.getElementById("mensaje")
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    /*Longitud de caracteres
    
    let lon_caracteres = nombre.length;
    if(lon_caracteres > 0){
        div_mensaje.innerHTML = "<p> Vas bien </p>"
    }else{
        div_mensaje.innerHTML = "<p> Mal contenido </p>"
    }*/

    if(nombre === "" || password === ""){
        div_mensaje.innerHTML = "<p> Mal contenido </p>"
    }else{
        div_mensaje.innerHTML = "<p> Vas bien </p>"
    }

    if(nombre === username && password === contra ){
        div_mensaje.innerHTML = "<p> Bienvenido, aqui esta tu mensaje oculto </p>"
    }
}

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
}
