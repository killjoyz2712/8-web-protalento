//Ejemplo 1;

function alumnos(sensei, ...alumnos){
    console.log(sensei);
    console.log(alumnos);
    console.log(`${sensei} tiene ${alumnos.length} alumnos`)
}

//["Juan Carlos", "Fabian" "]
alumnos("Roberto", "Juan Carlos", "Fabian", "Dora", "Yonny", "Alberto");

//Ejemplo 2
// sort: Ordenar elementos
let arreglo_sort = [5,3,1,6,7];
arreglo_sort.sort();
let arreglo_sort_az = ["Kiwi", "Fresa", "Berenjena", "Zapote", "Limon"]
console.log(arreglo_sort_az.sort());

//reverse: Voltea el contenido
let arreglo = [5,3,1,6,7];
let aux = [...arreglo];
arreglo.reverse();
console.log(arreglo)
console.log(aux);

alumnos("Adrian", ...arreglo)
