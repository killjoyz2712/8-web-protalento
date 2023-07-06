let arreglo_alumnos = ["Roberto", "Juan Carlos", "Fabian", "Dora", "Yonny", "Alberto"];
let calificaciones = [10,9,5,7,9,8]
let promedio = 0;
let alumnos_calificacion = [];

//JSON
/*let ejemplo = [
    {
        nombre: "Roberto",
        calificacion:10
    },
    {
        nombre:"Juan Carlos",
        calificacion: 9
    }
]*/


arreglo_alumnos.forEach((alumno,indice)=>{
    alumnos_calificacion.push({
        nombre: alumno,
        calificacion: calificaciones[indice]
    })
});

arreglo_alumnos.forEach((alumno)=>{
    console.log(alumno);
});

calificaciones.forEach((calificacion)=>{
    promedio += calificacion;
})

calificaciones.forEach((calificacion)=>{
    if(calificacion%2==0){
        console.log(`La calificacion ${calificacion} es par`);
    }
})

promedio = promedio/calificaciones.length;


console.log(alumnos_calificacion);