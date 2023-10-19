const s = localStorage.getItem("sensei")

function guardar(){
  localStorage.setItem("sensei",document.getElementById("nombre").value)
  sessionStorage.setItem("email","contacto@sensei.com")
  sessionStorage.setItem("json",JSON.stringify({nombre:"Juan", edad: 27, email: "juan@juan.io"}))
  alert("Se guardo el nombre")
}

function leer(){
  const s = sessionStorage.getItem("sensei")
  alert(s)
}

if(s)
  document.getElementById("sensei").innerHTML= s
else
  alert("Necesitar loguearte")