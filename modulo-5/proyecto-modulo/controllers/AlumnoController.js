import Alumno from '../models/Alumno.js'

const createAlumno = async (req, res) =>{
    /**Validacion con JOI */

    const alumno = new Alumno({
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        email: req.body.email,
        promedio: req.body.promedio,
        foto: req.body.foto,
        password: req.body.password
    })

    try{
        await alumno.save()
    } catch (error) {
        res.status(500).json(error)
    }

    res.json(alumno)
}

export {createAlumno}