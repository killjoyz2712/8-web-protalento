fetch("https://raw.githubusercontent.com/robextrem/elefantes/main/js/elephants.json").then(function(respuesta){
   console.log(respuesta)
   return respuesta.json();
}).then(function(respuesta2){
    console.log(respuesta2);
    console.log(respueta2[0].name)
});