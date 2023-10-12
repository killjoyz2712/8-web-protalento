import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'
function CrearUsuario(){

    const parametros = useParams();

    const url = `${import.meta.env.VITE_CRUD_URL}/usuarios`

    const [nombre,setNombre] = useState('')
    const [apellidoPaterno,setApellidoPaterno] = useState('')
    const [apellidoMaterno,setApellidoMaterno] = useState('')
    const [edad,setEdad] = useState(0)
    const [email,setEmail] = useState('')
    const [foto,setFoto] = useState('')
  

    useEffect(()=>{
        
        async function getUsuarios(){

            if(parametros.id == undefined){
                return;
            }

            await axios({
                url: `${url}/${parametros.id}`,
                method: "get"
            }).then((response)=>{
                setNombre(response.data.nombre)
                setApellidoMaterno(response.data.apellido_materno)
                setApellidoPaterno(response.data.apellido_paterno)
                setEdad(response.data.edad)
                setEmail(response.data.email)
                setFoto(response.data.foto)
            })
        }
        
        getUsuarios()
    },[])

    const changeNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const changeFoto = (evt) => {
        setFoto(evt.target.value)
    }

    const changeEdad = (evt) => {
        setEdad(evt.target.value)
    }

    const changeEmail = (evt) => {
        setEmail(evt.target.value)
    }

    const changeApellidoPaterno = (evt) => {
        setApellidoPaterno(evt.target.value)
    }

    const changeApellidoMaterno = (evt) => {
        setApellidoMaterno(evt.target.value)
    }

    const guardarUsuario = (evt) =>{
        evt.preventDefault();

        let method = "post";
        let liga = url

        if(parametros.id != undefined){
            method = "PUT"
            liga = `${url}/${parametros.id}`
        }
        Swal.showLoading()
        axios({
            url: liga,
            method: method,
            data:{
                "nombre": nombre,
                "apellido_paterno": apellidoPaterno,
                "apellido_materno": apellidoMaterno,
                "edad": edad,
                "email":email,
                "foto":foto
            }
        }).then((response)=>{
            Swal.close()
           console.log(response)
        })
    }

    return(
        <div className="container">
         <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarUsuario}>
                <div>
                    <label>Nombre</label>
                    
                    <input className="input" onChange={changeNombre} type="text" placeholder="Ingresa el nombre" value={nombre} ></input>
                </div>
                <div>
                    <label>Apellido Paterno</label>
                    <input className="input" onChange={changeApellidoPaterno} type="text" placeholder="Ingresa el apellido paterno" value={apellidoPaterno}></input>
                </div>
                <div>
                    <label>Apellido Materno</label>
                    <input className="input" onChange={changeApellidoMaterno} type="text" placeholder="Ingresa el apellido paterno" value={apellidoMaterno}></input>
                </div>
                <div>
                    <label>Edad</label>
                    <input className="input" onChange={changeEdad} type="number" placeholder="Ingresa la edad" value={edad}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input className="input" onChange={changeEmail} type="email" placeholder="Ingresa el email" value={email}></input>
                </div>
                <div>
                    <label>Foto</label>
                    <input className="input" onChange={changeFoto}  type="url" placeholder="Ingresa una url de una imagen" value={foto}></input>
                </div>
                <div>
                    <label>País</label><br/>
                    <div className="select is-fullwidth">
                        <select className="select is-fullwidth">
                            <option>Colombia</option>
                            <option>Ecuador</option>
                            <option>México</option>
                        </select>
                    </div>
                </div>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearUsuario;