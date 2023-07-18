function micallback(){
    console.log("Hola soy un callback");
}

micallback // Este trae la definicion completa de la funcion
micallback() // Este ejecuta la funcion y devuelve lo que hay en su retun

//Definicion de la funcion
document.querySelector("#enviar").addEventListener("click", micallback)
//Funcion anonima
document.querySelector("#enviar").addEventListener("click", function(){
    alert("Hola soy una funcion anonima");
});