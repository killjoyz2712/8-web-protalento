let x = 2;

function resolve(){
    console.log("Resolver promesa")
}

function reject(){
    console.log("Rechazar promesa")
    return null;
}

const promesa = new Promise((resolve, reject)=>{
    if(x == 1)
        resolve(true);
    else
        reject(false);
});

promesa.then(function(resultado){
    console.log(resultado)
    console.log("Listo el primer paso esta hecho!");
    return 100;
}).then(function(numero){
    console.log(numero)
    console.log("Listo el segundo paso esta hecho!");
    return "Una cadena";
}).then(function(cadena){
    console.log(cadena);
    console.log("El final ha llegado");
    return {
        resultado: "success"
    }
}).catch(function(){
    console.log("Hubo un Error en la ejecucion")
})



