function enviar(){
    // alert("Pasa algo");
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const numero = document.getElementById("numero").value;

    document.getElementById("titulo").innerHTML = nombre;
    document.getElementById("descripcion").innerHTML = "Su numero es: "+ numero;
    document.getElementById("foto").src = imagen;
    //document.getElementById("foto").setAttribute("src",imagen);

    console.log(nombre,imagen,numero)
}