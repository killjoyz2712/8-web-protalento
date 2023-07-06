let arreglo_alumnos = ["Roberto", "Juan Carlos", "Fabian", "Dora", "Yonny", "Alberto"];
let calificaciones = [10,9,5,7,9,8]


let resultado = calificaciones.map((calificacion)=>{
    return calificacion*2;
})

let alumnos_calificacion = arreglo_alumnos.map((alumno,indice)=>{
    return {
        nombre: alumno,
        calificacion: calificaciones[indice]
    };
})

console.log(resultado)
console.log(alumnos_calificacion);
