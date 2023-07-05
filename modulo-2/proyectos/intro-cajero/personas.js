let cuentas = [
    { nombre: "Mali", saldo: 200, password: "6545"}, // 0
    { nombre: "Gera", saldo: 290, password: "ee89"}, // 1
    { nombre: "Maui", saldo: 67, password: "91pt" } // 2
];

document.querySelector("#persona").addEventListener("change",leerPersona)




// cuentas[1] <- Gera

function leerPersona(){
    let indice = parseInt(document.querySelector("#persona").value);
    // console.log(cuentas[indice]);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;

    if(saldo < 100){
        alert("Tu saldo se esta acabando");
    }

    document.getElementById("saludo").innerHTML = "Hola, " + nombre;

    document.getElementById("meter-password").style.display = "block"

}

function irAotraPagina(){
    window.location.href = "exito.html"
}

// leerPersona();

