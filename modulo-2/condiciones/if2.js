const nombre = "Roberto";
const pais = "Mexico";

if(!(nombre !== "Roberto")){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// El sensei Roberto es de Mexico
if(nombre == "Roberto" && pais == "Mexico"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(nombre == "Roberto" && pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// El sensei que no es Roberto (o sea adrian) no es de Mexico
if(nombre !== "Roberto" && pais !== "Mexico"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// O el sensei es Roberto o el sensei es Mexicano
if(nombre == "Roberto" || pais == "Mexico"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// O el sensei es Roberto o el sensei es Colombiano
if(nombre == "Roberto" || pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(nombre == "Adrian" || pais == "Colombia"){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

// nombre !== "Roberto" // False
// ! (nombre !== "Roberto") // Verdadero


/** 
 * 
 * 
 * 
  !Verdadero = Falso
  !Falso = Verdadero

  !== / ===
  != / ==

  Verdadero && Verdadero = Verdadero
  Verdadero && Falso = Falso
  Falso && Verdadero = Falso
  Falso && Falso =  Falso

    Verdadero || Verdadero = Verdadero
  Verdadero || Falso = Vedadero
  Falso || Verdadero = Vedadero
  Falso || Falso =  Falso

*/