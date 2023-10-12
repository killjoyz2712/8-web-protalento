import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";
function Usuarios(){
    const url = `${import.meta.env.VITE_CRUD_URL}/usuarios`
    const [usuarios, setUsuarios] = useState([])
    const [modal,setModal] = useState('modal')
    const [usuario,setUsuario] = useState({})

    const showModal = (evt)=>{
        evt.preventDefault();

        if(modal.includes('is-active')){
            setModal('modal');
            return;
        }

        let id = evt.target.dataset.value
        setUsuario(usuarios.find((element) => element._id == id))
        setModal('modal is-active')

    }

    const deleteUsuario = (evt) => {
        evt.preventDefault();
        let id = evt.target.dataset.value
        console.log(id)
        Swal.showLoading()
        axios({
            url: `${url}/${id}`,
            method: 'delete'
        }).then((response)=>{
            Swal.close()
           console.log(response)
        })
    }

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
                <div className={modal}>
                    <div className="modal-background"></div>
                    <div className="modal-content p-6 has-background-white has-text-centered">
                        <img src={usuario.foto}/>
                        <p className="is-size-2">{usuario.nombre}</p>
                        <p className="is-size-4">{usuario.apellido_paterno}</p>
                        <p className="is-size-4">{usuario.apellido_materno}</p>
                        <p className="is-size-4">{usuario.email}</p>
                        <p className="is-size-4">{usuario.edad}</p>
                        <button onClick={showModal} data-value={usuario._id} className="button is-info">Ocultar</button>
                    </div>
                </div>
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
                                <Link to={`/update-usuario/${usuario._id}`} className="button is-primary">Editar</Link>
                                <button onClick={deleteUsuario} data-value={usuario._id} className="button is-danger">Borrar</button>
                                <button onClick={showModal} data-value={usuario._id} className="button is-info">Ver</button>
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