function saludar(nombre){ // nombre = "Alumnos devf"
    return "Hola " + nombre;
}

const nombre = prompt("Ingresa un nombre");
const resultado = saludar(nombre);
console.log(resultado);