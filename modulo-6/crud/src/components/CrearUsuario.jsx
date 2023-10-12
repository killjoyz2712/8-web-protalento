import { useState } from "react";
import axios from "axios";

function CrearUsuario(){

    const url = `${import.meta.env.VITE_CRUD_URL}/usuarios`

    const [nombre,setNombre] = useState('')
    const [apellidoPaterno,setApellidoPaterno] = useState('')
    const [apellidoMaterno,setApellidoMaterno] = useState('')
    const [edad,setEdad] = useState(0)

    const changeNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const changeEdad = (evt) => {
        setEdad(evt.target.value)
    }

    const changeApellidoPaterno = (evt) => {
        setApellidoPaterno(evt.target.value)
    }

    const changeApellidoMaterno = (evt) => {
        setApellidoMaterno(evt.target.value)
    }

    const guardarUsuario = (evt) =>{
        evt.preventDefault();
        axios({
            url: url,
            method: "post",
            data:{
                "nombre": nombre,
                "apellido_paterno": apellidoPaterno,
                "apellido_materno": apellidoMaterno,
                "edad": edad
            }
        }).then((response)=>{
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarUsuario}>
                <p>
                    <label>Nombre</label>
                    <input className="input" onChange={changeNombre} type="text" placeholder="Ingresa el nombre"></input>
                </p>
                <p>
                    <label>Apellido Paterno</label>
                    <input className="input" onChange={changeApellidoPaterno} type="text" placeholder="Ingresa el apellido paterno"></input>
                </p>
                <p>
                    <label>Apellido Materno</label>
                    <input className="input" onChange={changeApellidoMaterno} type="text" placeholder="Ingresa el apellido paterno"></input>
                </p>
                <p>
                    <label>Edad</label>
                    <input className="input" onChange={changeEdad} type="number" placeholder="Ingresa la edad"></input>
                </p>
                <p>
                    <label>Email</label>
                    <input className="input" type="email" placeholder="Ingresa el email"></input>
                </p>
                <p>
                    <label>Foto</label>
                    <input className="input" type="url" placeholder="Ingresa una url de una imagen"></input>
                </p>
                <p>
                    <label>País</label><br/>
                    <div className="select is-fullwidth">
                        <select>
                            <option>Colombia</option>
                            <option>Ecuador</option>
                            <option>México</option>
                        </select>
                    </div>
                </p>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearUsuario;