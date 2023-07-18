function llamaMiCallback(nombre, callback){ // Tarda 5 segundos
    setTimeout(function(){
        console.log(`Hola, ${nombre}`)
        callback();
    },5000);
}

function queHaces(){  // Tarda 3 segundos
    setTimeout(function(){
        console.log("Que haces?");
    },3000);
}

function dondeEstas(){  // Tarda 3 segundos
    setTimeout(function(){
        console.log("Donde estas?");
    },3000);
}

//llamaMiCallback("Adrian", queHaces)
//llamaMiCallback("Adrian", dondeEstas)
// Funcion Flecha
/*llamaMiCallback("Adrian", ()=>{
    console.log("Te extraño")
})*/
llamaMiCallback("Adrian", function(){
    console.log("Te extraño")
})


