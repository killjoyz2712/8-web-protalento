var index = 0;
var index2 = 0;

//Ejemplo while
/*let arreglo = []
let userInput;
while (!(userInput == "")){
    userInput = prompt("Agrega algo al arreglo")
    arreglo.push(userInput);
}
arreglo.pop();
console.log(arreglo);
*/

// Ejemplo while vs do-while
/*
while(index<11){
    console.log(index);
    index++;
}

do{
    index2++;
    console.log("Contador: "+ index2);
}while(index2<11);
*/
var contador = 0;
for(var indice = 1; indice<=10; indice++ ){
    if(indice % 2 == 0){
        contador++; // -> contador = contador +1;
        console.log(indice + " es un numero par");
    }
}

console.log("De 1 a 10 existen "+contador+" pares");