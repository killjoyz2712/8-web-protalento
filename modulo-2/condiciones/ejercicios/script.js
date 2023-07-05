/* Escribir un programa que pregunte al usuario su edad 
y muestre por pantalla si es mayor de edad o no. */

const edad = window.prompt("Cual es tu edad? (solo numeros)")

if(parseInt(edad) >= 18){
    alert("Eres mayor de edad")
}else{
    alert("Eres menor de edad")
}

