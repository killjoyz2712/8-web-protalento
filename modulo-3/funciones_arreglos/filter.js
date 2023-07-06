let arreglo_alumnos = ["Roberto", "Juan Carlos", "Fabian", "Dora", "Yonny", "Alberto"];
let calificaciones = [10,9,5,7,2,6]

let resultado = arreglo_alumnos.filter(alumno => alumno.length >= 6)

let resultado_calificacion = calificaciones.filter(calificacion => calificacion>5);

console.log(resultado);

console.log(resultado_calificacion);