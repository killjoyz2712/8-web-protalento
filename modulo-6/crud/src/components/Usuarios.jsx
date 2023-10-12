import { useEffect, useState } from "react";
import axios from 'axios';

function Usuarios(){
    const url = `${import.meta.env.VITE_CRUD_URL}/usuarios`
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        async function getUsuarios(){
            await axios({
                url: url,
                method: "get"
            }).then((response)=>{
                setUsuarios(response.data)
            })
        }
        getUsuarios()
    },[])

    return(
        <>
            <div className="container">
                <h1 className="my-5 is-size-4">Listado de usuarios</h1>
                <table className="table is-fullwidth">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Correo</th>
                        <th></th>
                    </tr>
                    {usuarios.map((usuario)=> (
                    <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido_paterno}</td>
                        <td>{usuario.apellido_materno}</td>
                        <td>{usuario.email}</td>
                        <td>
                            <div className="buttons is-right">
                                <a href="" className="button is-primary">Editar</a>
                                <a href="" className="button is-danger">Borrar</a>
                                <a href="" className="button is-info">Ver</a>
                            </div>
                        </td>
                    </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default Usuarios;