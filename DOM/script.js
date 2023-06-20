let body = document.body;
let titulo = document.getElementById("titulo");
let contenedor  = document.querySelector(".contenedor");

console.log(body);
console.log(body.children[0]);
contenedor.children[0].innerHTML = "Ya no dice igual"
titulo.style.color = "red";

body.innerHTML += "<h3>Prueba</h3>";


for(let i = 0; i<10; i++){
    body.innerHTML += "<h3>Prueba"+(i+1)+"</h3>";
}


let nuevo= document.createElement("div");
nuevo.innerHTML = "Hola Roberto"
nuevo.id ="div_generado"
nuevo.style.color = "aquamarine";
body.appendChild(nuevo);





function hazAlgo(){
    titulo.innerHTML = "Hola Liss"
    titulo.id = "Liss"
}