/** Ejemplo de eventos */
/*
document.querySelector("#nombre").addEventListener("blur", ejecutaEvento)
document.querySelector("#nombre").addEventListener("click", otroEvento)

function ejecutaEvento(){
    alert("Se ejecuto un evento");
}

function otroEvento(){
    alert("Otro evento")
} */


// document.querySelector("#nombre").addEventListener("keypress", ejecutaKeypress)
// document.querySelector("#nombre").addEventListener("keydown", ejecutaKeypress)
 document.querySelector("#nombre").addEventListener("keyup", ejecutaKeypress)
 document.querySelector("#apellido").addEventListener("keyup", ejecutaKeypress)

// document.querySelector("#nombre").addEventListener("change", ejecutaKeypress)

function ejecutaKeypress(evt){
    // evt.target.value = evt.target.value.toUpperCase();
    console.log(evt.target) // Elemento sobre el que sucedio el evento
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;

    if(nombre.toUpperCase() === "HOMERO")
        document.querySelector(".resultado").innerHTML = "No se admiten Homeros"
    else
        document.querySelector(".resultado").innerHTML = "Hola, " + nombre + " " + apellido;
}

