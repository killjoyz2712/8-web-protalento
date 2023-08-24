let empleados = document.getElementById('empleados');
let resultado = fetch("http://localhost:3000/api/empleados")
                    .then((res)=>{
                        return res.json();
                    })
                    .then((res)=>{
                        let aux = ''
                        res.forEach(element => {
                            aux += `Nombre: ${element.nombre} <br> Salario: ${element.salario} <br>`
                        });

                        empleados.innerHTML = aux;
                    })