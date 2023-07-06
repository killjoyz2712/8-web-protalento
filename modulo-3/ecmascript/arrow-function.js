function multiplicar(x, y){
    return x*y;
}

const multiplicarECMA = (x, y) => {
    return x*y;
}

//Esta forma solo aplica cuando mi funcion tiene 1 linea y es un return
const multiplicarECMASimple = (x, y) => x*y;

function saludar(){
    return "Hola mundo";
}

//Esta forma solo aplica cuando mi funcion tiene 1 linea y es un return
const saludarECMA = () => "Hola mundo";

//Esta funcion no se puede expresar en una sola linea
function saludarComplejo(){
    console.log("Hola");
    console.log("Mundo");
    return "Hola mundo";
}


console.log(multiplicar(5,5));
console.log(multiplicarECMA(5,5));
console.log(saludar())