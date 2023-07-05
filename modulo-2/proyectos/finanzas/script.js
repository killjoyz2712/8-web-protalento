var ingresos = [];
var egresos = [];

function agregarIngreso(){
    let nombre = document.getElementById("nombre").value;
    let monto = document.getElementById("monto").value;
    let fecha = document.getElementById("fecha").value;
    let caja = document.getElementById("caja_ingresos");
    let error = document.getElementById("error_modal");
    if(nombre == "" || monto == "" || fecha == ""){
        error.classList.remove("d-none");
        return;
    }else{
        error.classList.add("d-none");
    }
    ingresos.push({})
    caja.innerHTML += `<div class='text-light d-flex flex-column fs-5 justify-content-center align-items-center col-12 mt-4 bg-success h-25 rounded-2'><p>Nombre: ${nombre} </p><p>Monto: ${monto} COP </p><p>Fecha: ${fecha}</p></div>`;
}